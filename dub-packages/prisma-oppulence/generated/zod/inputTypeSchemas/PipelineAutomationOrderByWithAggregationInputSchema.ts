import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PipelineAutomationCountOrderByAggregateInputSchema } from './PipelineAutomationCountOrderByAggregateInputSchema';
import { PipelineAutomationAvgOrderByAggregateInputSchema } from './PipelineAutomationAvgOrderByAggregateInputSchema';
import { PipelineAutomationMaxOrderByAggregateInputSchema } from './PipelineAutomationMaxOrderByAggregateInputSchema';
import { PipelineAutomationMinOrderByAggregateInputSchema } from './PipelineAutomationMinOrderByAggregateInputSchema';
import { PipelineAutomationSumOrderByAggregateInputSchema } from './PipelineAutomationSumOrderByAggregateInputSchema';

export const PipelineAutomationOrderByWithAggregationInputSchema: z.ZodType<Prisma.PipelineAutomationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pipelineId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  triggerType: z.lazy(() => SortOrderSchema).optional(),
  actionType: z.lazy(() => SortOrderSchema).optional(),
  priority: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastTriggered: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PipelineAutomationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PipelineAutomationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PipelineAutomationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PipelineAutomationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PipelineAutomationSumOrderByAggregateInputSchema).optional()
}).strict();

export default PipelineAutomationOrderByWithAggregationInputSchema;
