'use server'

import { authenticatedAction } from '@/app/actions/safe-action'
import { logger } from '@/lib/logger'
import { prisma } from '@dub/prisma-archon'
import { createLeadSchema } from './schema'

/**
 * Creates a new lead for a given endpoint,
 * ensuring the endpoint belongs to the authenticated user.
 */
export const createLead = authenticatedAction
    .metadata({
        name: 'create-lead'
    })
    .schema(createLeadSchema)
    .action(async ({ parsedInput: { endpointId, data }, ctx: { userId } }) => {
        try {
            logger.debug('Creating new lead', {
                source: 'LeadService',
                context: {
                    endpointId,
                    userId
                }
            })

            // 1. Verify endpoint belongs to user
            //    We fetch one record matching [endpointId, userId].
            const endpoint = await prisma.endpoint.findFirst({
                where: {
                    id: endpointId,
                    userId
                }
            })

            if (!endpoint) {
                logger.error('Unauthorized endpoint access', {
                    source: 'LeadService',
                    context: {
                        endpointId,
                        userId
                    }
                })
                throw new Error('Unauthorized endpoint access')
            }

            // 2. Insert the new lead
            //    NOTE: For MySQL, Drizzle returns an object with e.g. `insertId`, `rowsAffected`.
            //    Unlike PostgreSQL, MySQL doesn't support `.returning()` natively.
            const result = await prisma.lead.create({
                data: {
                    data,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    endpointId
                }
            })

            return { success: true, leadId: result.id }
        } catch (error) {
            logger.error('Failed to create lead', {
                source: 'LeadService',
                error: error instanceof Error ? error : new Error('Unknown error'),
                context: {
                    endpointId,
                    userId,
                    errorType: error instanceof Error ? error.name : typeof error
                }
            })

            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error occurred'
            }
        }
    })
