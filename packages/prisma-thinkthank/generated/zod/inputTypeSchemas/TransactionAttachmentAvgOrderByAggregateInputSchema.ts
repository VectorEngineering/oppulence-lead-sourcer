import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TransactionAttachmentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionAttachmentAvgOrderByAggregateInput> = z.object({
  size: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TransactionAttachmentAvgOrderByAggregateInputSchema;
