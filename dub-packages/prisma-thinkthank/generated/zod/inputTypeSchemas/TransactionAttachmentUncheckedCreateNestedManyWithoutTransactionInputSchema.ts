import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionAttachmentCreateWithoutTransactionInputSchema } from './TransactionAttachmentCreateWithoutTransactionInputSchema';
import { TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema } from './TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema';
import { TransactionAttachmentCreateOrConnectWithoutTransactionInputSchema } from './TransactionAttachmentCreateOrConnectWithoutTransactionInputSchema';
import { TransactionAttachmentCreateManyTransactionInputEnvelopeSchema } from './TransactionAttachmentCreateManyTransactionInputEnvelopeSchema';
import { TransactionAttachmentWhereUniqueInputSchema } from './TransactionAttachmentWhereUniqueInputSchema';

export const TransactionAttachmentUncheckedCreateNestedManyWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionAttachmentUncheckedCreateNestedManyWithoutTransactionInput> = z.object({
  create: z.union([ z.lazy(() => TransactionAttachmentCreateWithoutTransactionInputSchema),z.lazy(() => TransactionAttachmentCreateWithoutTransactionInputSchema).array(),z.lazy(() => TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema),z.lazy(() => TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionAttachmentCreateOrConnectWithoutTransactionInputSchema),z.lazy(() => TransactionAttachmentCreateOrConnectWithoutTransactionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionAttachmentCreateManyTransactionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),z.lazy(() => TransactionAttachmentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TransactionAttachmentUncheckedCreateNestedManyWithoutTransactionInputSchema;
