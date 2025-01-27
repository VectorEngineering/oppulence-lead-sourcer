import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCommentCreateWithoutTransactionInputSchema } from './TransactionCommentCreateWithoutTransactionInputSchema';
import { TransactionCommentUncheckedCreateWithoutTransactionInputSchema } from './TransactionCommentUncheckedCreateWithoutTransactionInputSchema';
import { TransactionCommentCreateOrConnectWithoutTransactionInputSchema } from './TransactionCommentCreateOrConnectWithoutTransactionInputSchema';
import { TransactionCommentCreateManyTransactionInputEnvelopeSchema } from './TransactionCommentCreateManyTransactionInputEnvelopeSchema';
import { TransactionCommentWhereUniqueInputSchema } from './TransactionCommentWhereUniqueInputSchema';

export const TransactionCommentCreateNestedManyWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionCommentCreateNestedManyWithoutTransactionInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCommentCreateWithoutTransactionInputSchema),z.lazy(() => TransactionCommentCreateWithoutTransactionInputSchema).array(),z.lazy(() => TransactionCommentUncheckedCreateWithoutTransactionInputSchema),z.lazy(() => TransactionCommentUncheckedCreateWithoutTransactionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCommentCreateOrConnectWithoutTransactionInputSchema),z.lazy(() => TransactionCommentCreateOrConnectWithoutTransactionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCommentCreateManyTransactionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TransactionCommentWhereUniqueInputSchema),z.lazy(() => TransactionCommentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TransactionCommentCreateNestedManyWithoutTransactionInputSchema;
