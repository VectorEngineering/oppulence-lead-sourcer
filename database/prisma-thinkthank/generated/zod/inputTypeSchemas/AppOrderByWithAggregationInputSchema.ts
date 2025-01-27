import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { AppCountOrderByAggregateInputSchema } from './AppCountOrderByAggregateInputSchema'
import { AppMaxOrderByAggregateInputSchema } from './AppMaxOrderByAggregateInputSchema'
import { AppMinOrderByAggregateInputSchema } from './AppMinOrderByAggregateInputSchema'

export const AppOrderByWithAggregationInputSchema: z.ZodType<Prisma.AppOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        appId: z.lazy(() => SortOrderSchema).optional(),
        config: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        settings: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => AppCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => AppMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => AppMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default AppOrderByWithAggregationInputSchema
