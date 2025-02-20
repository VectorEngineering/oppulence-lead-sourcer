import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { ProgramResourceCountOrderByAggregateInputSchema } from './ProgramResourceCountOrderByAggregateInputSchema'
import { ProgramResourceAvgOrderByAggregateInputSchema } from './ProgramResourceAvgOrderByAggregateInputSchema'
import { ProgramResourceMaxOrderByAggregateInputSchema } from './ProgramResourceMaxOrderByAggregateInputSchema'
import { ProgramResourceMinOrderByAggregateInputSchema } from './ProgramResourceMinOrderByAggregateInputSchema'
import { ProgramResourceSumOrderByAggregateInputSchema } from './ProgramResourceSumOrderByAggregateInputSchema'

export const ProgramResourceOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProgramResourceOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        programId: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        url: z.lazy(() => SortOrderSchema).optional(),
        size: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => ProgramResourceCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => ProgramResourceAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => ProgramResourceMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => ProgramResourceMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => ProgramResourceSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default ProgramResourceOrderByWithAggregationInputSchema
