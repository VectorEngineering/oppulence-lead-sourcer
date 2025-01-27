import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LogOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LogOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LogOrderByRelationAggregateInputSchema;
