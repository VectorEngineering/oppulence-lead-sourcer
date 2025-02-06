import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCommentWhereInputSchema } from './InvoiceCommentWhereInputSchema';

export const InvoiceCommentNullableRelationFilterSchema: z.ZodType<Prisma.InvoiceCommentNullableRelationFilter> = z.object({
  is: z.lazy(() => InvoiceCommentWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => InvoiceCommentWhereInputSchema).optional().nullable()
}).strict();

export default InvoiceCommentNullableRelationFilterSchema;
