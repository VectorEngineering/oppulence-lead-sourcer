import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PipelineStageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PipelineStageOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PipelineStageOrderByRelationAggregateInputSchema;
