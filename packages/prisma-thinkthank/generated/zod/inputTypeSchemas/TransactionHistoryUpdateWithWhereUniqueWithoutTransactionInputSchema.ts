import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionHistoryWhereUniqueInputSchema } from './TransactionHistoryWhereUniqueInputSchema';
import { TransactionHistoryUpdateWithoutTransactionInputSchema } from './TransactionHistoryUpdateWithoutTransactionInputSchema';
import { TransactionHistoryUncheckedUpdateWithoutTransactionInputSchema } from './TransactionHistoryUncheckedUpdateWithoutTransactionInputSchema';

export const TransactionHistoryUpdateWithWhereUniqueWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionHistoryUpdateWithWhereUniqueWithoutTransactionInput> = z.object({
  where: z.lazy(() => TransactionHistoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TransactionHistoryUpdateWithoutTransactionInputSchema),z.lazy(() => TransactionHistoryUncheckedUpdateWithoutTransactionInputSchema) ]),
}).strict();

export default TransactionHistoryUpdateWithWhereUniqueWithoutTransactionInputSchema;
