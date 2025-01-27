import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadTimelineWhereInputSchema } from '../inputTypeSchemas/LeadTimelineWhereInputSchema'
import { LeadTimelineOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadTimelineOrderByWithRelationInputSchema'
import { LeadTimelineWhereUniqueInputSchema } from '../inputTypeSchemas/LeadTimelineWhereUniqueInputSchema'

export const LeadTimelineAggregateArgsSchema: z.ZodType<Prisma.LeadTimelineAggregateArgs> = z
    .object({
        where: LeadTimelineWhereInputSchema.optional(),
        orderBy: z.union([LeadTimelineOrderByWithRelationInputSchema.array(), LeadTimelineOrderByWithRelationInputSchema]).optional(),
        cursor: LeadTimelineWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadTimelineAggregateArgsSchema
