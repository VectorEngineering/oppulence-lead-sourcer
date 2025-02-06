'use server'

import { authenticatedAction } from '@/app/actions/safe-action'
import { logger } from '@/lib/logger'
import { prismaEdge as prisma } from '@dub/prisma-archon/edge'

/**
 * Gets usage information for a user
 * Protected by authenticatedAction wrapper
 */
export const getUsageForUser = authenticatedAction
    .metadata({
        name: 'get-usage-for-user'
    })
    .action(async ({ ctx: { userId } }) => {
        try {
            logger.debug('Starting user usage retrieval', {
                source: 'UserService',
                context: { userId }
            })

            const user = await prisma.user.findUnique({
                where: { id: userId },
                select: {
                    leadCount: true,
                    plan: true,
                    createdAt: true,
                    updatedAt: true
                }
            })

            if (!user) {
                logger.error('User not found for usage retrieval', {
                    source: 'UserService',
                    context: { userId }
                })
                throw new Error('User not found')
            }

            return {
                success: true,
                usage: {
                    leadCount: user.leadCount,
                    plan: user.plan,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                }
            }
        } catch (error) {
            logger.error('Failed to get user usage', {
                source: 'UserService',
                error: error instanceof Error ? error : new Error('Unknown error'),
                context: {
                    userId,
                    errorType: error instanceof Error ? error.name : typeof error
                }
            })
            throw error
        }
    })
