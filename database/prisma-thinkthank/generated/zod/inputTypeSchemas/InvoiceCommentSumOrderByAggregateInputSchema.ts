import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InvoiceCommentSumOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceCommentSumOrderByAggregateInput> = z.object({
  replyCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InvoiceCommentSumOrderByAggregateInputSchema;
