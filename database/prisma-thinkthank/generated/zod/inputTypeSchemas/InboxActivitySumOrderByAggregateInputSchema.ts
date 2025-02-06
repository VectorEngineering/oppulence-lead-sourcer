import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InboxActivitySumOrderByAggregateInputSchema: z.ZodType<Prisma.InboxActivitySumOrderByAggregateInput> = z.object({
  riskScore: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InboxActivitySumOrderByAggregateInputSchema;
