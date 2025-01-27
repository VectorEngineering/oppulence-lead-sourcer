import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { InstalledIntegrationCountOrderByAggregateInputSchema } from './InstalledIntegrationCountOrderByAggregateInputSchema'
import { InstalledIntegrationMaxOrderByAggregateInputSchema } from './InstalledIntegrationMaxOrderByAggregateInputSchema'
import { InstalledIntegrationMinOrderByAggregateInputSchema } from './InstalledIntegrationMinOrderByAggregateInputSchema'

export const InstalledIntegrationOrderByWithAggregationInputSchema: z.ZodType<Prisma.InstalledIntegrationOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        integrationId: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        credentials: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => InstalledIntegrationCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => InstalledIntegrationMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => InstalledIntegrationMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default InstalledIntegrationOrderByWithAggregationInputSchema
