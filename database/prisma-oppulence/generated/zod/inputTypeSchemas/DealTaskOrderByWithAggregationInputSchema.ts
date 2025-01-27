import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { DealTaskCountOrderByAggregateInputSchema } from './DealTaskCountOrderByAggregateInputSchema'
import { DealTaskMaxOrderByAggregateInputSchema } from './DealTaskMaxOrderByAggregateInputSchema'
import { DealTaskMinOrderByAggregateInputSchema } from './DealTaskMinOrderByAggregateInputSchema'

export const DealTaskOrderByWithAggregationInputSchema: z.ZodType<Prisma.DealTaskOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        dealId: z.lazy(() => SortOrderSchema).optional(),
        title: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        dueDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        priority: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        completedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        assignedToId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => DealTaskCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => DealTaskMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => DealTaskMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default DealTaskOrderByWithAggregationInputSchema
