import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { PipelineIntegrationCountOrderByAggregateInputSchema } from './PipelineIntegrationCountOrderByAggregateInputSchema'
import { PipelineIntegrationMaxOrderByAggregateInputSchema } from './PipelineIntegrationMaxOrderByAggregateInputSchema'
import { PipelineIntegrationMinOrderByAggregateInputSchema } from './PipelineIntegrationMinOrderByAggregateInputSchema'

export const PipelineIntegrationOrderByWithAggregationInputSchema: z.ZodType<Prisma.PipelineIntegrationOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        pipelineId: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        provider: z.lazy(() => SortOrderSchema).optional(),
        config: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        lastSyncedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => PipelineIntegrationCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => PipelineIntegrationMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => PipelineIntegrationMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default PipelineIntegrationOrderByWithAggregationInputSchema
