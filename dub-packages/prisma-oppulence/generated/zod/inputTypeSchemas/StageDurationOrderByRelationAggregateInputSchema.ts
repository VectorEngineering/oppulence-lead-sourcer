import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const StageDurationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StageDurationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default StageDurationOrderByRelationAggregateInputSchema;
