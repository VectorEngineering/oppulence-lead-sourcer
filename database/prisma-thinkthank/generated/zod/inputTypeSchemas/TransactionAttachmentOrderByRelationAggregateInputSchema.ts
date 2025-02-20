import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TransactionAttachmentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TransactionAttachmentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TransactionAttachmentOrderByRelationAggregateInputSchema;
