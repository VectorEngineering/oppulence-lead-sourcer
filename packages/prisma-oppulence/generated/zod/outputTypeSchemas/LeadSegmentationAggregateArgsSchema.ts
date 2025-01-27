import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSegmentationWhereInputSchema } from '../inputTypeSchemas/LeadSegmentationWhereInputSchema'
import { LeadSegmentationOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadSegmentationOrderByWithRelationInputSchema'
import { LeadSegmentationWhereUniqueInputSchema } from '../inputTypeSchemas/LeadSegmentationWhereUniqueInputSchema'

export const LeadSegmentationAggregateArgsSchema: z.ZodType<Prisma.LeadSegmentationAggregateArgs> = z
    .object({
        where: LeadSegmentationWhereInputSchema.optional(),
        orderBy: z
            .union([LeadSegmentationOrderByWithRelationInputSchema.array(), LeadSegmentationOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadSegmentationWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadSegmentationAggregateArgsSchema
