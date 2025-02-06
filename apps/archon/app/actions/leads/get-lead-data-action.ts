'use server'

import { authenticatedAction } from '@/app/actions/safe-action'
import { logger } from '@/lib/logger'
import { prisma } from '@dub/prisma-archon'
import { getLeadDataSchema } from './schema'

export const getLeadData = authenticatedAction
    .metadata({
        name: 'get-lead-data'
    })
    .schema(getLeadDataSchema)
    .action(async ({ parsedInput: { id }, ctx: { userId } }) => {
        try {
            logger.debug('Fetching lead data', {
                source: 'LeadService',
                context: {
                    leadId: id,
                    userId
                }
            })

            const leadWithEndpoint = await prisma.lead.findFirst({
                where: {
                    id
                },
                include: {
                    endpoint: true
                }
            })

            logger.debug('Authorization check', {
                source: 'LeadService',
                context: {
                    hasLead: leadWithEndpoint !== null,
                    matchesUserId: leadWithEndpoint?.endpoint.userId === userId,
                    leadId: id
                }
            })

            if (!leadWithEndpoint || leadWithEndpoint.endpoint.userId !== userId) {
                logger.error('Unauthorized lead access attempt', {
                    source: 'LeadService',
                    context: {
                        leadId: id,
                        userId
                    }
                })
                throw new Error('You are not authorized for this action.')
            }

            const leadData = await prisma.lead.findFirst({
                where: {
                    id
                }
            })

            return leadData
        } catch (error) {
            logger.error('Failed to get lead data', {
                source: 'LeadService',
                error: error instanceof Error ? error : new Error('Unknown error'),
                context: {
                    leadId: id,
                    userId,
                    errorType: error instanceof Error ? error.name : typeof error
                }
            })
            throw error
        }
    })
