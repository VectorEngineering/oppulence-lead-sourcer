import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionHistoryWhereUniqueInputSchema } from './TransactionHistoryWhereUniqueInputSchema';
import { TransactionHistoryUpdateWithoutTransactionInputSchema } from './TransactionHistoryUpdateWithoutTransactionInputSchema';
import { TransactionHistoryUncheckedUpdateWithoutTransactionInputSchema } from './TransactionHistoryUncheckedUpdateWithoutTransactionInputSchema';
import { TransactionHistoryCreateWithoutTransactionInputSchema } from './TransactionHistoryCreateWithoutTransactionInputSchema';
import { TransactionHistoryUncheckedCreateWithoutTransactionInputSchema } from './TransactionHistoryUncheckedCreateWithoutTransactionInputSchema';

export const TransactionHistoryUpsertWithWhereUniqueWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionHistoryUpsertWithWhereUniqueWithoutTransactionInput> = z.object({
  where: z.lazy(() => TransactionHistoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TransactionHistoryUpdateWithoutTransactionInputSchema),z.lazy(() => TransactionHistoryUncheckedUpdateWithoutTransactionInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionHistoryCreateWithoutTransactionInputSchema),z.lazy(() => TransactionHistoryUncheckedCreateWithoutTransactionInputSchema) ]),
}).strict();

export default TransactionHistoryUpsertWithWhereUniqueWithoutTransactionInputSchema;
