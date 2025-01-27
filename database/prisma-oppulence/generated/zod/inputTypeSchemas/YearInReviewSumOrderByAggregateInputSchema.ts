import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const YearInReviewSumOrderByAggregateInputSchema: z.ZodType<Prisma.YearInReviewSumOrderByAggregateInput> = z
    .object({
        year: z.lazy(() => SortOrderSchema).optional(),
        totalLinks: z.lazy(() => SortOrderSchema).optional(),
        totalClicks: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default YearInReviewSumOrderByAggregateInputSchema
