import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCommentWhereUniqueInputSchema } from './TransactionCommentWhereUniqueInputSchema';
import { TransactionCommentUpdateWithoutTransactionInputSchema } from './TransactionCommentUpdateWithoutTransactionInputSchema';
import { TransactionCommentUncheckedUpdateWithoutTransactionInputSchema } from './TransactionCommentUncheckedUpdateWithoutTransactionInputSchema';

export const TransactionCommentUpdateWithWhereUniqueWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionCommentUpdateWithWhereUniqueWithoutTransactionInput> = z.object({
  where: z.lazy(() => TransactionCommentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TransactionCommentUpdateWithoutTransactionInputSchema),z.lazy(() => TransactionCommentUncheckedUpdateWithoutTransactionInputSchema) ]),
}).strict();

export default TransactionCommentUpdateWithWhereUniqueWithoutTransactionInputSchema;
