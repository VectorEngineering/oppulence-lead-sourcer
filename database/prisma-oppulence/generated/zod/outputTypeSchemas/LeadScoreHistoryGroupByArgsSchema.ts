import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadScoreHistoryWhereInputSchema } from '../inputTypeSchemas/LeadScoreHistoryWhereInputSchema'
import { LeadScoreHistoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadScoreHistoryOrderByWithAggregationInputSchema'
import { LeadScoreHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/LeadScoreHistoryScalarFieldEnumSchema'
import { LeadScoreHistoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadScoreHistoryScalarWhereWithAggregatesInputSchema'

export const LeadScoreHistoryGroupByArgsSchema: z.ZodType<Prisma.LeadScoreHistoryGroupByArgs> = z
    .object({
        where: LeadScoreHistoryWhereInputSchema.optional(),
        orderBy: z
            .union([LeadScoreHistoryOrderByWithAggregationInputSchema.array(), LeadScoreHistoryOrderByWithAggregationInputSchema])
            .optional(),
        by: LeadScoreHistoryScalarFieldEnumSchema.array(),
        having: LeadScoreHistoryScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadScoreHistoryGroupByArgsSchema
