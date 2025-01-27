import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { WorkspaceCountOrderByAggregateInputSchema } from './WorkspaceCountOrderByAggregateInputSchema'
import { WorkspaceMaxOrderByAggregateInputSchema } from './WorkspaceMaxOrderByAggregateInputSchema'
import { WorkspaceMinOrderByAggregateInputSchema } from './WorkspaceMinOrderByAggregateInputSchema'

export const WorkspaceOrderByWithAggregationInputSchema: z.ZodType<Prisma.WorkspaceOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        ownerId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => WorkspaceCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => WorkspaceMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => WorkspaceMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default WorkspaceOrderByWithAggregationInputSchema
