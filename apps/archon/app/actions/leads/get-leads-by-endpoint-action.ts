'use server'

import { authenticatedAction } from '@/app/actions/safe-action'
import { logger } from '@/lib/logger'
import { prismaEdge as prisma } from '@dub/prisma-archon/edge'
import { getLeadsByEndpointSchema } from './schema'

export const getLeadsByEndpoint = authenticatedAction
    .metadata({
        name: 'get-leads-by-endpoint'
    })
    .schema(getLeadsByEndpointSchema)
    .action(async ({ parsedInput: { id }, ctx: { userId } }) => {
        try {
            logger.debug('Fetching leads by endpoint', {
                source: 'LeadService',
                context: {
                    endpointId: id,
                    userId
                }
            })

            const endpoint = await prisma.endpoint.findFirst({
                where: {
                    id,
                    userId
                }
            })

            logger.debug('Authorization check', {
                source: 'LeadService',
                context: {
                    hasEndpoint: endpoint !== null,
                    endpointId: id
                }
            })

            if (!endpoint) {
                logger.error('Unauthorized endpoint access attempt', {
                    source: 'LeadService',
                    context: {
                        endpointId: id,
                        userId
                    }
                })
                throw new Error('You are not authorized for this action')
            }

            const leadData = await prisma.lead.findMany({
                where: {
                    endpointId: id
                }
            })

            return {
                leadData,
                schema: endpoint.schema as { key: string; value: string }[]
            }
        } catch (error) {
            logger.error('Failed to get leads by endpoint', {
                source: 'LeadService',
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
