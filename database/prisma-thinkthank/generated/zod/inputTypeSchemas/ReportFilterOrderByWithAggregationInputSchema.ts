import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { ReportFilterCountOrderByAggregateInputSchema } from './ReportFilterCountOrderByAggregateInputSchema'
import { ReportFilterAvgOrderByAggregateInputSchema } from './ReportFilterAvgOrderByAggregateInputSchema'
import { ReportFilterMaxOrderByAggregateInputSchema } from './ReportFilterMaxOrderByAggregateInputSchema'
import { ReportFilterMinOrderByAggregateInputSchema } from './ReportFilterMinOrderByAggregateInputSchema'
import { ReportFilterSumOrderByAggregateInputSchema } from './ReportFilterSumOrderByAggregateInputSchema'

export const ReportFilterOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReportFilterOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        reportId: z.lazy(() => SortOrderSchema).optional(),
        field: z.lazy(() => SortOrderSchema).optional(),
        operator: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        valueType: z.lazy(() => SortOrderSchema).optional(),
        group: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        position: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => ReportFilterCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => ReportFilterAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => ReportFilterMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => ReportFilterMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => ReportFilterSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default ReportFilterOrderByWithAggregationInputSchema
