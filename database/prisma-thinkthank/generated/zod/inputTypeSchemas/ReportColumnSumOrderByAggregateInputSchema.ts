import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportColumnSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReportColumnSumOrderByAggregateInput> = z
    .object({
        width: z.lazy(() => SortOrderSchema).optional(),
        position: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ReportColumnSumOrderByAggregateInputSchema
