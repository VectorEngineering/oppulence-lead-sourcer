import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InboxShareAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InboxShareAvgOrderByAggregateInput> = z.object({
  accessCount: z.lazy(() => SortOrderSchema).optional(),
  maxAccesses: z.lazy(() => SortOrderSchema).optional(),
  deviceLimit: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InboxShareAvgOrderByAggregateInputSchema;
