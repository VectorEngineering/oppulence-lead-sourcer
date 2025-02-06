import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCommentWhereUniqueInputSchema } from './TransactionCommentWhereUniqueInputSchema';
import { TransactionCommentCreateWithoutTransactionInputSchema } from './TransactionCommentCreateWithoutTransactionInputSchema';
import { TransactionCommentUncheckedCreateWithoutTransactionInputSchema } from './TransactionCommentUncheckedCreateWithoutTransactionInputSchema';

export const TransactionCommentCreateOrConnectWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionCommentCreateOrConnectWithoutTransactionInput> = z.object({
  where: z.lazy(() => TransactionCommentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionCommentCreateWithoutTransactionInputSchema),z.lazy(() => TransactionCommentUncheckedCreateWithoutTransactionInputSchema) ]),
}).strict();

export default TransactionCommentCreateOrConnectWithoutTransactionInputSchema;
