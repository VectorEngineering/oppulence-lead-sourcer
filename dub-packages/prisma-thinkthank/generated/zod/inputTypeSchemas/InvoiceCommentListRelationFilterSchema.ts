import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCommentWhereInputSchema } from './InvoiceCommentWhereInputSchema';

export const InvoiceCommentListRelationFilterSchema: z.ZodType<Prisma.InvoiceCommentListRelationFilter> = z.object({
  every: z.lazy(() => InvoiceCommentWhereInputSchema).optional(),
  some: z.lazy(() => InvoiceCommentWhereInputSchema).optional(),
  none: z.lazy(() => InvoiceCommentWhereInputSchema).optional()
}).strict();

export default InvoiceCommentListRelationFilterSchema;
