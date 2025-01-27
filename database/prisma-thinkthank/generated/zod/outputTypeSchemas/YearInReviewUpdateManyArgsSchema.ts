import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { YearInReviewUpdateManyMutationInputSchema } from '../inputTypeSchemas/YearInReviewUpdateManyMutationInputSchema'
import { YearInReviewUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/YearInReviewUncheckedUpdateManyInputSchema'
import { YearInReviewWhereInputSchema } from '../inputTypeSchemas/YearInReviewWhereInputSchema'

export const YearInReviewUpdateManyArgsSchema: z.ZodType<Prisma.YearInReviewUpdateManyArgs> = z
    .object({
        data: z.union([YearInReviewUpdateManyMutationInputSchema, YearInReviewUncheckedUpdateManyInputSchema]),
        where: YearInReviewWhereInputSchema.optional()
    })
    .strict()

export default YearInReviewUpdateManyArgsSchema
