import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionAttachmentWhereUniqueInputSchema } from './TransactionAttachmentWhereUniqueInputSchema';
import { TransactionAttachmentCreateWithoutTransactionInputSchema } from './TransactionAttachmentCreateWithoutTransactionInputSchema';
import { TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema } from './TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema';

export const TransactionAttachmentCreateOrConnectWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionAttachmentCreateOrConnectWithoutTransactionInput> = z.object({
  where: z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionAttachmentCreateWithoutTransactionInputSchema),z.lazy(() => TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema) ]),
}).strict();

export default TransactionAttachmentCreateOrConnectWithoutTransactionInputSchema;
