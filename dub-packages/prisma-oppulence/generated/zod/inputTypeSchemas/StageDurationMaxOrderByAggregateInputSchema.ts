import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const StageDurationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StageDurationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pipelineId: z.lazy(() => SortOrderSchema).optional(),
  stageId: z.lazy(() => SortOrderSchema).optional(),
  expectedDays: z.lazy(() => SortOrderSchema).optional(),
  warningDays: z.lazy(() => SortOrderSchema).optional(),
  criticalDays: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default StageDurationMaxOrderByAggregateInputSchema;
