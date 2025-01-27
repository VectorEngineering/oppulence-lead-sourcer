import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionAttachmentWhereUniqueInputSchema } from './TransactionAttachmentWhereUniqueInputSchema';
import { TransactionAttachmentUpdateWithoutTransactionInputSchema } from './TransactionAttachmentUpdateWithoutTransactionInputSchema';
import { TransactionAttachmentUncheckedUpdateWithoutTransactionInputSchema } from './TransactionAttachmentUncheckedUpdateWithoutTransactionInputSchema';
import { TransactionAttachmentCreateWithoutTransactionInputSchema } from './TransactionAttachmentCreateWithoutTransactionInputSchema';
import { TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema } from './TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema';

export const TransactionAttachmentUpsertWithWhereUniqueWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionAttachmentUpsertWithWhereUniqueWithoutTransactionInput> = z.object({
  where: z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TransactionAttachmentUpdateWithoutTransactionInputSchema),z.lazy(() => TransactionAttachmentUncheckedUpdateWithoutTransactionInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionAttachmentCreateWithoutTransactionInputSchema),z.lazy(() => TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema) ]),
}).strict();

export default TransactionAttachmentUpsertWithWhereUniqueWithoutTransactionInputSchema;
