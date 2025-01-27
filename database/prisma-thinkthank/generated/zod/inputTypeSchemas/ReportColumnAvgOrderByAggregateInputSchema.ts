import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportColumnAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReportColumnAvgOrderByAggregateInput> = z
    .object({
        width: z.lazy(() => SortOrderSchema).optional(),
        position: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ReportColumnAvgOrderByAggregateInputSchema
