import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { DashboardCountOrderByAggregateInputSchema } from './DashboardCountOrderByAggregateInputSchema'
import { DashboardMaxOrderByAggregateInputSchema } from './DashboardMaxOrderByAggregateInputSchema'
import { DashboardMinOrderByAggregateInputSchema } from './DashboardMinOrderByAggregateInputSchema'

export const DashboardOrderByWithAggregationInputSchema: z.ZodType<Prisma.DashboardOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        linkId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        projectId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        userId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        doIndex: z.lazy(() => SortOrderSchema).optional(),
        password: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        showConversions: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => DashboardCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => DashboardMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => DashboardMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default DashboardOrderByWithAggregationInputSchema
