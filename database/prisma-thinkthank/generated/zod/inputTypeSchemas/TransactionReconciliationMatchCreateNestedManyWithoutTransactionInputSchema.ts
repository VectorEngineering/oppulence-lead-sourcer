import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionReconciliationMatchCreateWithoutTransactionInputSchema } from './TransactionReconciliationMatchCreateWithoutTransactionInputSchema';
import { TransactionReconciliationMatchUncheckedCreateWithoutTransactionInputSchema } from './TransactionReconciliationMatchUncheckedCreateWithoutTransactionInputSchema';
import { TransactionReconciliationMatchCreateOrConnectWithoutTransactionInputSchema } from './TransactionReconciliationMatchCreateOrConnectWithoutTransactionInputSchema';
import { TransactionReconciliationMatchCreateManyTransactionInputEnvelopeSchema } from './TransactionReconciliationMatchCreateManyTransactionInputEnvelopeSchema';
import { TransactionReconciliationMatchWhereUniqueInputSchema } from './TransactionReconciliationMatchWhereUniqueInputSchema';

export const TransactionReconciliationMatchCreateNestedManyWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchCreateNestedManyWithoutTransactionInput> = z.object({
  create: z.union([ z.lazy(() => TransactionReconciliationMatchCreateWithoutTransactionInputSchema),z.lazy(() => TransactionReconciliationMatchCreateWithoutTransactionInputSchema).array(),z.lazy(() => TransactionReconciliationMatchUncheckedCreateWithoutTransactionInputSchema),z.lazy(() => TransactionReconciliationMatchUncheckedCreateWithoutTransactionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionReconciliationMatchCreateOrConnectWithoutTransactionInputSchema),z.lazy(() => TransactionReconciliationMatchCreateOrConnectWithoutTransactionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionReconciliationMatchCreateManyTransactionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TransactionReconciliationMatchWhereUniqueInputSchema),z.lazy(() => TransactionReconciliationMatchWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TransactionReconciliationMatchCreateNestedManyWithoutTransactionInputSchema;
