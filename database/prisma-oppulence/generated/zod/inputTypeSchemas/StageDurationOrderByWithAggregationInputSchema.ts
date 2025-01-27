import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { StageDurationCountOrderByAggregateInputSchema } from './StageDurationCountOrderByAggregateInputSchema'
import { StageDurationAvgOrderByAggregateInputSchema } from './StageDurationAvgOrderByAggregateInputSchema'
import { StageDurationMaxOrderByAggregateInputSchema } from './StageDurationMaxOrderByAggregateInputSchema'
import { StageDurationMinOrderByAggregateInputSchema } from './StageDurationMinOrderByAggregateInputSchema'
import { StageDurationSumOrderByAggregateInputSchema } from './StageDurationSumOrderByAggregateInputSchema'

export const StageDurationOrderByWithAggregationInputSchema: z.ZodType<Prisma.StageDurationOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        pipelineId: z.lazy(() => SortOrderSchema).optional(),
        stageId: z.lazy(() => SortOrderSchema).optional(),
        expectedDays: z.lazy(() => SortOrderSchema).optional(),
        warningDays: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        criticalDays: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => StageDurationCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => StageDurationAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => StageDurationMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => StageDurationMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => StageDurationSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default StageDurationOrderByWithAggregationInputSchema
