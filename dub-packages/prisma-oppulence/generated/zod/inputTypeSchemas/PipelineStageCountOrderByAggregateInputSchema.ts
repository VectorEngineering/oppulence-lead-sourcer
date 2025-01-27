import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PipelineStageCountOrderByAggregateInputSchema: z.ZodType<Prisma.PipelineStageCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pipelineId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  probability: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  isDefault: z.lazy(() => SortOrderSchema).optional(),
  isFinal: z.lazy(() => SortOrderSchema).optional(),
  isWon: z.lazy(() => SortOrderSchema).optional(),
  isLost: z.lazy(() => SortOrderSchema).optional(),
  autoMoveAfterDays: z.lazy(() => SortOrderSchema).optional(),
  nextStageId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PipelineStageCountOrderByAggregateInputSchema;
