import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { YearInReviewSelectSchema } from '../inputTypeSchemas/YearInReviewSelectSchema'
import { YearInReviewIncludeSchema } from '../inputTypeSchemas/YearInReviewIncludeSchema'

export const YearInReviewArgsSchema: z.ZodType<Prisma.YearInReviewDefaultArgs> = z
    .object({
        select: z.lazy(() => YearInReviewSelectSchema).optional(),
        include: z.lazy(() => YearInReviewIncludeSchema).optional()
    })
    .strict()

export default YearInReviewArgsSchema
