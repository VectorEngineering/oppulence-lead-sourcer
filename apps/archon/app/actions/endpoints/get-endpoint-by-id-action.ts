'use server'

import { authenticatedAction } from '@/app/actions/safe-action'
import { logger } from '@/lib/logger'
import { prisma } from '@dub/prisma-archon'
import type { Endpoint } from '@dub/prisma-archon/client'
import { getEndpointByIdSchema } from './schema'
/**
 * Gets a specific endpoint by id
 */
export const getEndpointById = authenticatedAction
    .metadata({
        name: 'get-endpoint-by-id'
    })
    .schema(getEndpointByIdSchema)
    .action(async ({ parsedInput: { id }, ctx: { userId } }) => {
        try {
            logger.debug('Fetching endpoint by ID', {
                source: 'EndpointService',
                context: {
                    endpointId: id,
                    userId
                }
            })

            const data = await prisma.endpoint.findFirst({
                where: {
                    id: id,
                    userId: userId
                }
            })

            logger.debug('Authorization check', {
                source: 'EndpointService',
                context: {
                    hasEndpoint: !!data,
                    endpointId: id
                }
            })

            if (!data) {
                logger.error('Endpoint not found or unauthorized access', {
                    source: 'EndpointService',
                    context: {
                        endpointId: id,
                        userId
                    }
                })
                return null
            }

            return data satisfies Endpoint
        } catch (error) {
            logger.error('Failed to get endpoint by ID', {
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
