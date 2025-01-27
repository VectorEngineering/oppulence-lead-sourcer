import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PipelineKpiCountOrderByAggregateInputSchema } from './PipelineKpiCountOrderByAggregateInputSchema';
import { PipelineKpiAvgOrderByAggregateInputSchema } from './PipelineKpiAvgOrderByAggregateInputSchema';
import { PipelineKpiMaxOrderByAggregateInputSchema } from './PipelineKpiMaxOrderByAggregateInputSchema';
import { PipelineKpiMinOrderByAggregateInputSchema } from './PipelineKpiMinOrderByAggregateInputSchema';
import { PipelineKpiSumOrderByAggregateInputSchema } from './PipelineKpiSumOrderByAggregateInputSchema';

export const PipelineKpiOrderByWithAggregationInputSchema: z.ZodType<Prisma.PipelineKpiOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pipelineId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  target: z.lazy(() => SortOrderSchema).optional(),
  current: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  unit: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  frequency: z.lazy(() => SortOrderSchema).optional(),
  calculation: z.lazy(() => SortOrderSchema).optional(),
  formula: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PipelineKpiCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PipelineKpiAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PipelineKpiMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PipelineKpiMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PipelineKpiSumOrderByAggregateInputSchema).optional()
}).strict();

export default PipelineKpiOrderByWithAggregationInputSchema;
