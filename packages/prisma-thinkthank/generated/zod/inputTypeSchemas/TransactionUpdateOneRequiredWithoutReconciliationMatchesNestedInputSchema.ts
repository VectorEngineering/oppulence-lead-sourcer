import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCreateWithoutReconciliationMatchesInputSchema } from './TransactionCreateWithoutReconciliationMatchesInputSchema';
import { TransactionUncheckedCreateWithoutReconciliationMatchesInputSchema } from './TransactionUncheckedCreateWithoutReconciliationMatchesInputSchema';
import { TransactionCreateOrConnectWithoutReconciliationMatchesInputSchema } from './TransactionCreateOrConnectWithoutReconciliationMatchesInputSchema';
import { TransactionUpsertWithoutReconciliationMatchesInputSchema } from './TransactionUpsertWithoutReconciliationMatchesInputSchema';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionUpdateToOneWithWhereWithoutReconciliationMatchesInputSchema } from './TransactionUpdateToOneWithWhereWithoutReconciliationMatchesInputSchema';
import { TransactionUpdateWithoutReconciliationMatchesInputSchema } from './TransactionUpdateWithoutReconciliationMatchesInputSchema';
import { TransactionUncheckedUpdateWithoutReconciliationMatchesInputSchema } from './TransactionUncheckedUpdateWithoutReconciliationMatchesInputSchema';

export const TransactionUpdateOneRequiredWithoutReconciliationMatchesNestedInputSchema: z.ZodType<Prisma.TransactionUpdateOneRequiredWithoutReconciliationMatchesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutReconciliationMatchesInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutReconciliationMatchesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TransactionCreateOrConnectWithoutReconciliationMatchesInputSchema).optional(),
  upsert: z.lazy(() => TransactionUpsertWithoutReconciliationMatchesInputSchema).optional(),
  connect: z.lazy(() => TransactionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TransactionUpdateToOneWithWhereWithoutReconciliationMatchesInputSchema),z.lazy(() => TransactionUpdateWithoutReconciliationMatchesInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutReconciliationMatchesInputSchema) ]).optional(),
}).strict();

export default TransactionUpdateOneRequiredWithoutReconciliationMatchesNestedInputSchema;
