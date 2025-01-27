import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadTimelineWhereInputSchema } from '../inputTypeSchemas/LeadTimelineWhereInputSchema'
import { LeadTimelineOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadTimelineOrderByWithAggregationInputSchema'
import { LeadTimelineScalarFieldEnumSchema } from '../inputTypeSchemas/LeadTimelineScalarFieldEnumSchema'
import { LeadTimelineScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadTimelineScalarWhereWithAggregatesInputSchema'

export const LeadTimelineGroupByArgsSchema: z.ZodType<Prisma.LeadTimelineGroupByArgs> = z
    .object({
        where: LeadTimelineWhereInputSchema.optional(),
        orderBy: z.union([LeadTimelineOrderByWithAggregationInputSchema.array(), LeadTimelineOrderByWithAggregationInputSchema]).optional(),
        by: LeadTimelineScalarFieldEnumSchema.array(),
        having: LeadTimelineScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadTimelineGroupByArgsSchema
