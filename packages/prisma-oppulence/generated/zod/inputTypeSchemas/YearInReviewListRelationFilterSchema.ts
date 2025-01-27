import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { YearInReviewWhereInputSchema } from './YearInReviewWhereInputSchema'

export const YearInReviewListRelationFilterSchema: z.ZodType<Prisma.YearInReviewListRelationFilter> = z
    .object({
        every: z.lazy(() => YearInReviewWhereInputSchema).optional(),
        some: z.lazy(() => YearInReviewWhereInputSchema).optional(),
        none: z.lazy(() => YearInReviewWhereInputSchema).optional()
    })
    .strict()

export default YearInReviewListRelationFilterSchema
