import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionHistoryScalarWhereInputSchema } from './TransactionHistoryScalarWhereInputSchema';
import { TransactionHistoryUpdateManyMutationInputSchema } from './TransactionHistoryUpdateManyMutationInputSchema';
import { TransactionHistoryUncheckedUpdateManyWithoutTransactionInputSchema } from './TransactionHistoryUncheckedUpdateManyWithoutTransactionInputSchema';

export const TransactionHistoryUpdateManyWithWhereWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionHistoryUpdateManyWithWhereWithoutTransactionInput> = z.object({
  where: z.lazy(() => TransactionHistoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TransactionHistoryUpdateManyMutationInputSchema),z.lazy(() => TransactionHistoryUncheckedUpdateManyWithoutTransactionInputSchema) ]),
}).strict();

export default TransactionHistoryUpdateManyWithWhereWithoutTransactionInputSchema;
