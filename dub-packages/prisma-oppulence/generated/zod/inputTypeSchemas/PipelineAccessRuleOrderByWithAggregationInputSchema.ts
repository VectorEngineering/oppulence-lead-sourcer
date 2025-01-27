import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PipelineAccessRuleCountOrderByAggregateInputSchema } from './PipelineAccessRuleCountOrderByAggregateInputSchema';
import { PipelineAccessRuleMaxOrderByAggregateInputSchema } from './PipelineAccessRuleMaxOrderByAggregateInputSchema';
import { PipelineAccessRuleMinOrderByAggregateInputSchema } from './PipelineAccessRuleMinOrderByAggregateInputSchema';

export const PipelineAccessRuleOrderByWithAggregationInputSchema: z.ZodType<Prisma.PipelineAccessRuleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pipelineId: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  teamId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  accessLevel: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PipelineAccessRuleCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PipelineAccessRuleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PipelineAccessRuleMinOrderByAggregateInputSchema).optional()
}).strict();

export default PipelineAccessRuleOrderByWithAggregationInputSchema;
