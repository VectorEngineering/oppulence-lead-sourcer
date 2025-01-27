import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PipelineOrderByWithRelationInputSchema } from './PipelineOrderByWithRelationInputSchema';
import { DealOrderByRelationAggregateInputSchema } from './DealOrderByRelationAggregateInputSchema';
import { StageRequiredFieldOrderByRelationAggregateInputSchema } from './StageRequiredFieldOrderByRelationAggregateInputSchema';
import { StageDurationOrderByWithRelationInputSchema } from './StageDurationOrderByWithRelationInputSchema';
import { PipelineStageOrderByRelevanceInputSchema } from './PipelineStageOrderByRelevanceInputSchema';

export const PipelineStageOrderByWithRelationInputSchema: z.ZodType<Prisma.PipelineStageOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pipelineId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  probability: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  icon: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isDefault: z.lazy(() => SortOrderSchema).optional(),
  isFinal: z.lazy(() => SortOrderSchema).optional(),
  isWon: z.lazy(() => SortOrderSchema).optional(),
  isLost: z.lazy(() => SortOrderSchema).optional(),
  autoMoveAfterDays: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nextStageId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  pipeline: z.lazy(() => PipelineOrderByWithRelationInputSchema).optional(),
  deals: z.lazy(() => DealOrderByRelationAggregateInputSchema).optional(),
  requiredFields: z.lazy(() => StageRequiredFieldOrderByRelationAggregateInputSchema).optional(),
  stageDuration: z.lazy(() => StageDurationOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => PipelineStageOrderByRelevanceInputSchema).optional()
}).strict();

export default PipelineStageOrderByWithRelationInputSchema;
