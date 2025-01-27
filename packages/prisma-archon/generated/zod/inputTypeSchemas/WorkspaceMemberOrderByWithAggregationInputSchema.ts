import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { WorkspaceMemberCountOrderByAggregateInputSchema } from './WorkspaceMemberCountOrderByAggregateInputSchema'
import { WorkspaceMemberMaxOrderByAggregateInputSchema } from './WorkspaceMemberMaxOrderByAggregateInputSchema'
import { WorkspaceMemberMinOrderByAggregateInputSchema } from './WorkspaceMemberMinOrderByAggregateInputSchema'

export const WorkspaceMemberOrderByWithAggregationInputSchema: z.ZodType<Prisma.WorkspaceMemberOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        workspaceId: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        role: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => WorkspaceMemberCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => WorkspaceMemberMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => WorkspaceMemberMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default WorkspaceMemberOrderByWithAggregationInputSchema
