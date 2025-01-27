import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PipelineOrderByWithRelationInputSchema } from './PipelineOrderByWithRelationInputSchema';
import { PipelineStageOrderByWithRelationInputSchema } from './PipelineStageOrderByWithRelationInputSchema';
import { StageDurationOrderByRelevanceInputSchema } from './StageDurationOrderByRelevanceInputSchema';

export const StageDurationOrderByWithRelationInputSchema: z.ZodType<Prisma.StageDurationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pipelineId: z.lazy(() => SortOrderSchema).optional(),
  stageId: z.lazy(() => SortOrderSchema).optional(),
  expectedDays: z.lazy(() => SortOrderSchema).optional(),
  warningDays: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  criticalDays: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pipeline: z.lazy(() => PipelineOrderByWithRelationInputSchema).optional(),
  stage: z.lazy(() => PipelineStageOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => StageDurationOrderByRelevanceInputSchema).optional()
}).strict();

export default StageDurationOrderByWithRelationInputSchema;
