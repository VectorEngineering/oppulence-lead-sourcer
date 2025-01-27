import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DealHistoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DealHistoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DealHistoryOrderByRelationAggregateInputSchema;
