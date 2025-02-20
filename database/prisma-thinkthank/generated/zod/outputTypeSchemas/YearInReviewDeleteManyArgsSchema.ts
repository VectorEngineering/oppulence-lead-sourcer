import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { YearInReviewWhereInputSchema } from '../inputTypeSchemas/YearInReviewWhereInputSchema'

export const YearInReviewDeleteManyArgsSchema: z.ZodType<Prisma.YearInReviewDeleteManyArgs> = z
    .object({
        where: YearInReviewWhereInputSchema.optional()
    })
    .strict()

export default YearInReviewDeleteManyArgsSchema
