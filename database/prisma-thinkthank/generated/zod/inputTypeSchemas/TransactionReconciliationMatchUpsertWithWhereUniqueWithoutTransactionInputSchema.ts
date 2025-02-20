import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionReconciliationMatchWhereUniqueInputSchema } from './TransactionReconciliationMatchWhereUniqueInputSchema';
import { TransactionReconciliationMatchUpdateWithoutTransactionInputSchema } from './TransactionReconciliationMatchUpdateWithoutTransactionInputSchema';
import { TransactionReconciliationMatchUncheckedUpdateWithoutTransactionInputSchema } from './TransactionReconciliationMatchUncheckedUpdateWithoutTransactionInputSchema';
import { TransactionReconciliationMatchCreateWithoutTransactionInputSchema } from './TransactionReconciliationMatchCreateWithoutTransactionInputSchema';
import { TransactionReconciliationMatchUncheckedCreateWithoutTransactionInputSchema } from './TransactionReconciliationMatchUncheckedCreateWithoutTransactionInputSchema';

export const TransactionReconciliationMatchUpsertWithWhereUniqueWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchUpsertWithWhereUniqueWithoutTransactionInput> = z.object({
  where: z.lazy(() => TransactionReconciliationMatchWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TransactionReconciliationMatchUpdateWithoutTransactionInputSchema),z.lazy(() => TransactionReconciliationMatchUncheckedUpdateWithoutTransactionInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionReconciliationMatchCreateWithoutTransactionInputSchema),z.lazy(() => TransactionReconciliationMatchUncheckedCreateWithoutTransactionInputSchema) ]),
}).strict();

export default TransactionReconciliationMatchUpsertWithWhereUniqueWithoutTransactionInputSchema;
