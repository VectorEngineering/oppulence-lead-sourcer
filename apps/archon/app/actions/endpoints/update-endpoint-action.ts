'use server'

import { authenticatedAction } from '@/app/actions/safe-action'
import { logger } from '@/lib/logger'
import { prisma } from '@dub/prisma-archon'
import type { Prisma } from '@dub/prisma-archon/client'
import { revalidatePath } from 'next/cache'
import { updateEndpointSchema } from './schema'

/**
 * Updates an existing endpoint
 * Protected by authenticatedAction wrapper
 * Validates user ownership of the endpoint
 */
export const updateEndpoint = authenticatedAction
    .metadata({
        name: 'update-endpoint'
    })
    .schema(updateEndpointSchema)
    .action(
        async ({
            parsedInput: { id, name, schema, enabled, webhookEnabled, emailNotify, webhook, formEnabled, successUrl, failUrl },
            ctx: { userId }
        }) => {
            try {
                logger.debug('Starting endpoint update', {
                    source: 'EndpointService',
                    context: {
                        endpointId: id,
                        userId,
                        name,
                        enabled
                    }
                })

                // Verify ownership
                const existingEndpoint = await prisma.endpoint.findFirst({
                    where: {
                        id: id
                    }
                })

                if (!existingEndpoint) {
                    logger.error('Endpoint not found for update', {
                        source: 'EndpointService',
                        context: {
                            endpointId: id,
                            userId
                        }
                    })
                    throw new Error('Endpoint not found')
                }

                if (existingEndpoint.userId !== userId) {
                    logger.error('Unauthorized endpoint update attempt', {
                        source: 'EndpointService',
                        context: {
                            endpointId: id,
                            userId,
                            ownerUserId: existingEndpoint.userId
                        }
                    })
                    throw new Error('You are not authorized to update this endpoint')
                }
                // Update the endpoint
                const data = await prisma.endpoint.update({
                    where: {
                        id: id
                    },
                    data: {
                        name,
                        schema: schema ? (schema as Prisma.InputJsonValue) : (existingEndpoint.schema as Prisma.InputJsonValue),
                        enabled: enabled ?? existingEndpoint.enabled,
                        webhookEnabled: webhookEnabled ?? existingEndpoint.webhookEnabled,
                        emailNotify: emailNotify ?? existingEndpoint.emailNotify,
                        webhook: webhook ?? existingEndpoint.webhook,
                        formEnabled: formEnabled ?? existingEndpoint.formEnabled,
                        successUrl: successUrl ?? existingEndpoint.successUrl,
                        failUrl: failUrl ?? existingEndpoint.failUrl,
                        updatedAt: new Date()
                    }
                })

                revalidatePath('/portal/endpoints')
                return { success: true, endpoint: data }
            } catch (error) {
                logger.error('Failed to update endpoint', {
                    source: 'EndpointService',
                    error: error instanceof Error ? error : new Error('Unknown error'),
                    context: {
                        endpointId: id,
                        userId,
                        errorType: error instanceof Error ? error.name : typeof error
                    }
                })
                throw error
            }
        }
    )
