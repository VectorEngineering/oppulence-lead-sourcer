import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCommentWhereUniqueInputSchema } from './TransactionCommentWhereUniqueInputSchema';
import { TransactionCommentUpdateWithoutTransactionInputSchema } from './TransactionCommentUpdateWithoutTransactionInputSchema';
import { TransactionCommentUncheckedUpdateWithoutTransactionInputSchema } from './TransactionCommentUncheckedUpdateWithoutTransactionInputSchema';
import { TransactionCommentCreateWithoutTransactionInputSchema } from './TransactionCommentCreateWithoutTransactionInputSchema';
import { TransactionCommentUncheckedCreateWithoutTransactionInputSchema } from './TransactionCommentUncheckedCreateWithoutTransactionInputSchema';

export const TransactionCommentUpsertWithWhereUniqueWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionCommentUpsertWithWhereUniqueWithoutTransactionInput> = z.object({
  where: z.lazy(() => TransactionCommentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TransactionCommentUpdateWithoutTransactionInputSchema),z.lazy(() => TransactionCommentUncheckedUpdateWithoutTransactionInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionCommentCreateWithoutTransactionInputSchema),z.lazy(() => TransactionCommentUncheckedCreateWithoutTransactionInputSchema) ]),
}).strict();

export default TransactionCommentUpsertWithWhereUniqueWithoutTransactionInputSchema;
