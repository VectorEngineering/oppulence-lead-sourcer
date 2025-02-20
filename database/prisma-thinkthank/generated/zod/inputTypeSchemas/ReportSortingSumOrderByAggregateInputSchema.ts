import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportSortingSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReportSortingSumOrderByAggregateInput> = z
    .object({
        position: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ReportSortingSumOrderByAggregateInputSchema
