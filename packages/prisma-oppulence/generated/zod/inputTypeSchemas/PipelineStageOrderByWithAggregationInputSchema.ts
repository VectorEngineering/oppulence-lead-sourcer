import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { PipelineStageCountOrderByAggregateInputSchema } from './PipelineStageCountOrderByAggregateInputSchema'
import { PipelineStageAvgOrderByAggregateInputSchema } from './PipelineStageAvgOrderByAggregateInputSchema'
import { PipelineStageMaxOrderByAggregateInputSchema } from './PipelineStageMaxOrderByAggregateInputSchema'
import { PipelineStageMinOrderByAggregateInputSchema } from './PipelineStageMinOrderByAggregateInputSchema'
import { PipelineStageSumOrderByAggregateInputSchema } from './PipelineStageSumOrderByAggregateInputSchema'

export const PipelineStageOrderByWithAggregationInputSchema: z.ZodType<Prisma.PipelineStageOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        pipelineId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        order: z.lazy(() => SortOrderSchema).optional(),
        probability: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        color: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        icon: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        isDefault: z.lazy(() => SortOrderSchema).optional(),
        isFinal: z.lazy(() => SortOrderSchema).optional(),
        isWon: z.lazy(() => SortOrderSchema).optional(),
        isLost: z.lazy(() => SortOrderSchema).optional(),
        autoMoveAfterDays: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        nextStageId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => PipelineStageCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => PipelineStageAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => PipelineStageMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => PipelineStageMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => PipelineStageSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default PipelineStageOrderByWithAggregationInputSchema
