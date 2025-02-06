import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionReconciliationMatchScalarWhereInputSchema } from './TransactionReconciliationMatchScalarWhereInputSchema';
import { TransactionReconciliationMatchUpdateManyMutationInputSchema } from './TransactionReconciliationMatchUpdateManyMutationInputSchema';
import { TransactionReconciliationMatchUncheckedUpdateManyWithoutTransactionInputSchema } from './TransactionReconciliationMatchUncheckedUpdateManyWithoutTransactionInputSchema';

export const TransactionReconciliationMatchUpdateManyWithWhereWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchUpdateManyWithWhereWithoutTransactionInput> = z.object({
  where: z.lazy(() => TransactionReconciliationMatchScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TransactionReconciliationMatchUpdateManyMutationInputSchema),z.lazy(() => TransactionReconciliationMatchUncheckedUpdateManyWithoutTransactionInputSchema) ]),
}).strict();

export default TransactionReconciliationMatchUpdateManyWithWhereWithoutTransactionInputSchema;
