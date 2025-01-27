import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { YearInReviewCreateManyInputSchema } from '../inputTypeSchemas/YearInReviewCreateManyInputSchema'

export const YearInReviewCreateManyArgsSchema: z.ZodType<Prisma.YearInReviewCreateManyArgs> = z
    .object({
        data: z.union([YearInReviewCreateManyInputSchema, YearInReviewCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default YearInReviewCreateManyArgsSchema
