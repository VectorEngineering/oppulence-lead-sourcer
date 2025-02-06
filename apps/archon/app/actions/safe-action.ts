import * as Sentry from '@sentry/nextjs'

import { getCurrentDatabaseUser, getCurrentUser } from '@/lib/user-queries/user'
import { DEFAULT_SERVER_ERROR_MESSAGE, createSafeActionClient } from 'next-safe-action'

import { logger } from '@/lib/logger'
import type { User } from '@clerk/nextjs/server'
import { prisma } from '@dub/prisma-archon'
import type { User as PrismaUser } from '@dub/prisma-archon/client'
import { z } from 'zod'

interface ActionContext {
    db: typeof prisma
    clerkAuthenticatedUser: User
    ratelimit?: {
        remaining: number
    }
    databaseUser: PrismaUser
    userId: string
}

export const actionClient = createSafeActionClient({
    handleServerError(e) {
        logger.error('Action client error', {
            source: 'ActionClient',
            error: e instanceof Error ? e : new Error('Unknown error'),
            context: {
                errorType: e instanceof Error ? e.name : typeof e
            }
        })

        if (e instanceof Error) {
            return e.message
        }

        return DEFAULT_SERVER_ERROR_MESSAGE
    }
})

export const actionClientWithMeta = createSafeActionClient({
    handleServerError(e) {
        logger.error('Action client with meta error', {
            source: 'ActionClient',
            error: e instanceof Error ? e : new Error('Unknown error'),
            context: {
                errorType: e instanceof Error ? e.name : typeof e
            }
        })

        if (e instanceof Error) {
            return e.message
        }

        return DEFAULT_SERVER_ERROR_MESSAGE
    },
    defineMetadataSchema() {
        return z.object({
            name: z.string()
        })
    }
})

export const authenticatedAction = actionClientWithMeta
    .use(async ({ next, clientInput, metadata }) => {
        logger.debug('Starting development logging middleware', {
            source: 'AuthActionClient',
            context: { metadata }
        })

        const result = await next({ ctx: {} as ActionContext })

        if (process.env.NODE_ENV === 'development') {
            logger.debug('Development mode input details', {
                source: 'AuthActionClient',
                context: {
                    input: clientInput,
                    result,
                    metadata
                }
            })
        }

        return result
    })
    .use(async ({ next, metadata }) => {
        logger.debug('Starting authentication middleware', {
            source: 'AuthActionClient',
            context: { actionName: metadata?.name }
        })

        const user = await getCurrentUser()
        const databaseUser = await getCurrentDatabaseUser()

        if (!user) {
            logger.error('Authentication failed - No Clerk user', {
                source: 'AuthActionClient',
                context: { actionName: metadata?.name }
            })
            throw new Error('Unauthorized')
        }

        // NOTE: we do not throw an error here because this safe action is used for onboarding
        // and we want to continue to the next step if the user is not in the database as that is required for onboarding
        if (!databaseUser) {
            logger.error('Authentication failed - No database user', {
                source: 'AuthActionClient',
                context: {
                    userId: user.id,
                    actionName: metadata?.name
                }
            })
        }

        logger.debug('Executing authenticated action', {
            source: 'AuthActionClient',
            context: {
                actionName: metadata?.name,
                userId: user.id
            }
        })

        return Sentry.withServerActionInstrumentation(metadata.name, async () => {
            return await next({
                ctx: {
                    db: prisma,
                    clerkAuthenticatedUser: user,
                    databaseUser: databaseUser || null,
                    userId: user.id
                } as ActionContext
            })
        })
    })

export const parseActionError = (error: {
    serverError?: string
    validationErrors?: {
        _errors?: string[]
        id?: {
            _errors?: string[]
        }
    }
    bindArgsValidationErrors?: readonly []
    fetchError?: string
}): string => {
    logger.debug('Starting error parsing', {
        source: 'ActionErrorParser',
        context: { error }
    })

    if (error.serverError) {
        return error.serverError
    }

    if (error.validationErrors?._errors?.[0]) {
        return error.validationErrors._errors[0]
    }

    if (error.validationErrors?.id?._errors?.[0]) {
        return error.validationErrors.id._errors[0]
    }

    if (error.fetchError) {
        return error.fetchError
    }

    return DEFAULT_SERVER_ERROR_MESSAGE
}

export class ActionError extends Error {}
