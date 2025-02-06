'use server'

import { authenticatedAction } from '@/app/actions/safe-action'
import { logger } from '@/lib/logger'
import { prisma } from '@dub/prisma-archon'
import { revalidatePath } from 'next/cache'
import { deleteLeadSchema } from './schema'

export const deleteLead = authenticatedAction
    .metadata({
        name: 'delete-lead'
    })
    .schema(deleteLeadSchema)
    .action(async ({ parsedInput: { id }, ctx: { userId } }) => {
        try {
            logger.debug('Starting lead deletion', {
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
                logger.error('Unauthorized lead deletion attempt', {
                    source: 'LeadService',
                    context: {
                        leadId: id,
                        userId
                    }
                })
                throw new Error('You are not authorized for this action.')
            }

            await prisma.lead.delete({
                where: {
                    id
                }
            })

            revalidatePath('/leads')
            return { success: true }
        } catch (error) {
            logger.error('Failed to delete lead', {
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
