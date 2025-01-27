import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportSortingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReportSortingOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ReportSortingOrderByRelationAggregateInputSchema
