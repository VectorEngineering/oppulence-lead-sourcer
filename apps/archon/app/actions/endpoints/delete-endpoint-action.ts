'use server'

import { authenticatedAction } from '@/app/actions/safe-action'
import { logger } from '@/lib/logger'
import { prisma } from '@dub/prisma-archon'
import { revalidatePath } from 'next/cache'
import { deleteEndpointSchema } from './schema'

/**
 * Deletes a specific endpoint by id
 */
export const deleteEndpoint = authenticatedAction
    .metadata({
        name: 'delete-endpoint'
    })
    .schema(deleteEndpointSchema)
    .action(async ({ parsedInput: { id }, ctx: { userId } }) => {
        try {
            logger.debug('Starting endpoint deletion', {
                source: 'EndpointService',
                context: {
                    endpointId: id,
                    userId
                }
            })

            // No `.run()`, just await the query
            const result = await prisma.endpoint.delete({
                where: {
                    id: id,
                    userId: userId
                }
            })

            // MySQL driver returns a result object with `rowsAffected`
            logger.debug('Deletion result', {
                source: 'EndpointService',
                context: {
                    endpointId: id,
                    deleted: result.id !== null
                }
            })

            if (result.id === null) {
                logger.error('Unauthorized endpoint deletion attempt', {
                    source: 'EndpointService',
                    context: {
                        endpointId: id,
                        userId
                    }
                })
                throw new Error('You are not authorized for this action.')
            }

            revalidatePath('/portal/endpoints')
            return { success: true }
        } catch (error) {
            logger.error('Failed to delete endpoint', {
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
    })
