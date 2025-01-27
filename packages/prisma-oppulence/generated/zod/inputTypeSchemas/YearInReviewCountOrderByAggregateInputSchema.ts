import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const YearInReviewCountOrderByAggregateInputSchema: z.ZodType<Prisma.YearInReviewCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        year: z.lazy(() => SortOrderSchema).optional(),
        totalLinks: z.lazy(() => SortOrderSchema).optional(),
        totalClicks: z.lazy(() => SortOrderSchema).optional(),
        topLinks: z.lazy(() => SortOrderSchema).optional(),
        topCountries: z.lazy(() => SortOrderSchema).optional(),
        workspaceId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        sentAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default YearInReviewCountOrderByAggregateInputSchema
