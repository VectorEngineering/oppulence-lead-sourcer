import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadFeedbackWhereInputSchema } from '../inputTypeSchemas/LeadFeedbackWhereInputSchema'
import { LeadFeedbackOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadFeedbackOrderByWithAggregationInputSchema'
import { LeadFeedbackScalarFieldEnumSchema } from '../inputTypeSchemas/LeadFeedbackScalarFieldEnumSchema'
import { LeadFeedbackScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadFeedbackScalarWhereWithAggregatesInputSchema'

export const LeadFeedbackGroupByArgsSchema: z.ZodType<Prisma.LeadFeedbackGroupByArgs> = z
    .object({
        where: LeadFeedbackWhereInputSchema.optional(),
        orderBy: z.union([LeadFeedbackOrderByWithAggregationInputSchema.array(), LeadFeedbackOrderByWithAggregationInputSchema]).optional(),
        by: LeadFeedbackScalarFieldEnumSchema.array(),
        having: LeadFeedbackScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadFeedbackGroupByArgsSchema
