import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionHistoryWhereUniqueInputSchema } from './TransactionHistoryWhereUniqueInputSchema';
import { TransactionHistoryCreateWithoutTransactionInputSchema } from './TransactionHistoryCreateWithoutTransactionInputSchema';
import { TransactionHistoryUncheckedCreateWithoutTransactionInputSchema } from './TransactionHistoryUncheckedCreateWithoutTransactionInputSchema';

export const TransactionHistoryCreateOrConnectWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionHistoryCreateOrConnectWithoutTransactionInput> = z.object({
  where: z.lazy(() => TransactionHistoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionHistoryCreateWithoutTransactionInputSchema),z.lazy(() => TransactionHistoryUncheckedCreateWithoutTransactionInputSchema) ]),
}).strict();

export default TransactionHistoryCreateOrConnectWithoutTransactionInputSchema;
