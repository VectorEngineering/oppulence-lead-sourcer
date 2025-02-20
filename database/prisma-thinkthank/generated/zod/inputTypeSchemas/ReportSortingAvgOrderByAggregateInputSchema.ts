import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportSortingAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReportSortingAvgOrderByAggregateInput> = z
    .object({
        position: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ReportSortingAvgOrderByAggregateInputSchema
