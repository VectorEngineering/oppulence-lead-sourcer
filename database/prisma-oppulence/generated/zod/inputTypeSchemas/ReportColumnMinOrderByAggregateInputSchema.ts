import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportColumnMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReportColumnMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        reportId: z.lazy(() => SortOrderSchema).optional(),
        field: z.lazy(() => SortOrderSchema).optional(),
        label: z.lazy(() => SortOrderSchema).optional(),
        width: z.lazy(() => SortOrderSchema).optional(),
        position: z.lazy(() => SortOrderSchema).optional(),
        isVisible: z.lazy(() => SortOrderSchema).optional(),
        format: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ReportColumnMinOrderByAggregateInputSchema
