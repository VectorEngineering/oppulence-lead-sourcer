import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { ReportAccessCountOrderByAggregateInputSchema } from './ReportAccessCountOrderByAggregateInputSchema'
import { ReportAccessMaxOrderByAggregateInputSchema } from './ReportAccessMaxOrderByAggregateInputSchema'
import { ReportAccessMinOrderByAggregateInputSchema } from './ReportAccessMinOrderByAggregateInputSchema'

export const ReportAccessOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReportAccessOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        reportId: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        accessType: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => ReportAccessCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => ReportAccessMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => ReportAccessMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default ReportAccessOrderByWithAggregationInputSchema
