import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCommunicationWhereInputSchema } from '../inputTypeSchemas/LeadCommunicationWhereInputSchema'
import { LeadCommunicationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadCommunicationOrderByWithAggregationInputSchema'
import { LeadCommunicationScalarFieldEnumSchema } from '../inputTypeSchemas/LeadCommunicationScalarFieldEnumSchema'
import { LeadCommunicationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadCommunicationScalarWhereWithAggregatesInputSchema'

export const LeadCommunicationGroupByArgsSchema: z.ZodType<Prisma.LeadCommunicationGroupByArgs> = z
    .object({
        where: LeadCommunicationWhereInputSchema.optional(),
        orderBy: z
            .union([LeadCommunicationOrderByWithAggregationInputSchema.array(), LeadCommunicationOrderByWithAggregationInputSchema])
            .optional(),
        by: LeadCommunicationScalarFieldEnumSchema.array(),
        having: LeadCommunicationScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadCommunicationGroupByArgsSchema
