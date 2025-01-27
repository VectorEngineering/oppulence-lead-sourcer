import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadComplianceHistoryWhereInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryWhereInputSchema'
import { LeadComplianceHistoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryOrderByWithAggregationInputSchema'
import { LeadComplianceHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/LeadComplianceHistoryScalarFieldEnumSchema'
import { LeadComplianceHistoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryScalarWhereWithAggregatesInputSchema'

export const LeadComplianceHistoryGroupByArgsSchema: z.ZodType<Prisma.LeadComplianceHistoryGroupByArgs> = z
    .object({
        where: LeadComplianceHistoryWhereInputSchema.optional(),
        orderBy: z
            .union([LeadComplianceHistoryOrderByWithAggregationInputSchema.array(), LeadComplianceHistoryOrderByWithAggregationInputSchema])
            .optional(),
        by: LeadComplianceHistoryScalarFieldEnumSchema.array(),
        having: LeadComplianceHistoryScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadComplianceHistoryGroupByArgsSchema
