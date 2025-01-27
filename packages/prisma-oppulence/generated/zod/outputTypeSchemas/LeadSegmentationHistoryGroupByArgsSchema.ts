import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSegmentationHistoryWhereInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryWhereInputSchema'
import { LeadSegmentationHistoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryOrderByWithAggregationInputSchema'
import { LeadSegmentationHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/LeadSegmentationHistoryScalarFieldEnumSchema'
import { LeadSegmentationHistoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryScalarWhereWithAggregatesInputSchema'

export const LeadSegmentationHistoryGroupByArgsSchema: z.ZodType<Prisma.LeadSegmentationHistoryGroupByArgs> = z
    .object({
        where: LeadSegmentationHistoryWhereInputSchema.optional(),
        orderBy: z
            .union([
                LeadSegmentationHistoryOrderByWithAggregationInputSchema.array(),
                LeadSegmentationHistoryOrderByWithAggregationInputSchema
            ])
            .optional(),
        by: LeadSegmentationHistoryScalarFieldEnumSchema.array(),
        having: LeadSegmentationHistoryScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadSegmentationHistoryGroupByArgsSchema
