import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportFilterCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReportFilterCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        reportId: z.lazy(() => SortOrderSchema).optional(),
        field: z.lazy(() => SortOrderSchema).optional(),
        operator: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        valueType: z.lazy(() => SortOrderSchema).optional(),
        group: z.lazy(() => SortOrderSchema).optional(),
        position: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ReportFilterCountOrderByAggregateInputSchema
