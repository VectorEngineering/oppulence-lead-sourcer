import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { YearInReviewWhereInputSchema } from '../inputTypeSchemas/YearInReviewWhereInputSchema'
import { YearInReviewOrderByWithRelationInputSchema } from '../inputTypeSchemas/YearInReviewOrderByWithRelationInputSchema'
import { YearInReviewWhereUniqueInputSchema } from '../inputTypeSchemas/YearInReviewWhereUniqueInputSchema'

export const YearInReviewAggregateArgsSchema: z.ZodType<Prisma.YearInReviewAggregateArgs> = z
    .object({
        where: YearInReviewWhereInputSchema.optional(),
        orderBy: z.union([YearInReviewOrderByWithRelationInputSchema.array(), YearInReviewOrderByWithRelationInputSchema]).optional(),
        cursor: YearInReviewWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default YearInReviewAggregateArgsSchema
