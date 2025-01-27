import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InvoiceCommentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceCommentAvgOrderByAggregateInput> = z.object({
  replyCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InvoiceCommentAvgOrderByAggregateInputSchema;
