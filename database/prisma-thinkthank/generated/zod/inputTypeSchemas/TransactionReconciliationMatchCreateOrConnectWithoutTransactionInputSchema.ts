import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionReconciliationMatchWhereUniqueInputSchema } from './TransactionReconciliationMatchWhereUniqueInputSchema';
import { TransactionReconciliationMatchCreateWithoutTransactionInputSchema } from './TransactionReconciliationMatchCreateWithoutTransactionInputSchema';
import { TransactionReconciliationMatchUncheckedCreateWithoutTransactionInputSchema } from './TransactionReconciliationMatchUncheckedCreateWithoutTransactionInputSchema';

export const TransactionReconciliationMatchCreateOrConnectWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchCreateOrConnectWithoutTransactionInput> = z.object({
  where: z.lazy(() => TransactionReconciliationMatchWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionReconciliationMatchCreateWithoutTransactionInputSchema),z.lazy(() => TransactionReconciliationMatchUncheckedCreateWithoutTransactionInputSchema) ]),
}).strict();

export default TransactionReconciliationMatchCreateOrConnectWithoutTransactionInputSchema;
