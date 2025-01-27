import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadRiskWhereInputSchema } from '../inputTypeSchemas/LeadRiskWhereInputSchema'
import { LeadRiskOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadRiskOrderByWithAggregationInputSchema'
import { LeadRiskScalarFieldEnumSchema } from '../inputTypeSchemas/LeadRiskScalarFieldEnumSchema'
import { LeadRiskScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadRiskScalarWhereWithAggregatesInputSchema'

export const LeadRiskGroupByArgsSchema: z.ZodType<Prisma.LeadRiskGroupByArgs> = z
    .object({
        where: LeadRiskWhereInputSchema.optional(),
        orderBy: z.union([LeadRiskOrderByWithAggregationInputSchema.array(), LeadRiskOrderByWithAggregationInputSchema]).optional(),
        by: LeadRiskScalarFieldEnumSchema.array(),
        having: LeadRiskScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadRiskGroupByArgsSchema
