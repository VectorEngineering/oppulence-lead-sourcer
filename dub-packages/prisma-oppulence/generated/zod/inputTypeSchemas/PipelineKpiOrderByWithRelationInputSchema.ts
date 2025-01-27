import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PipelineOrderByWithRelationInputSchema } from './PipelineOrderByWithRelationInputSchema';
import { PipelineKpiOrderByRelevanceInputSchema } from './PipelineKpiOrderByRelevanceInputSchema';

export const PipelineKpiOrderByWithRelationInputSchema: z.ZodType<Prisma.PipelineKpiOrderByWithRelationInput> = z.object({
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
  pipeline: z.lazy(() => PipelineOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => PipelineKpiOrderByRelevanceInputSchema).optional()
}).strict();

export default PipelineKpiOrderByWithRelationInputSchema;
