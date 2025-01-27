import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCommentWhereInputSchema } from './TransactionCommentWhereInputSchema';

export const TransactionCommentListRelationFilterSchema: z.ZodType<Prisma.TransactionCommentListRelationFilter> = z.object({
  every: z.lazy(() => TransactionCommentWhereInputSchema).optional(),
  some: z.lazy(() => TransactionCommentWhereInputSchema).optional(),
  none: z.lazy(() => TransactionCommentWhereInputSchema).optional()
}).strict();

export default TransactionCommentListRelationFilterSchema;
