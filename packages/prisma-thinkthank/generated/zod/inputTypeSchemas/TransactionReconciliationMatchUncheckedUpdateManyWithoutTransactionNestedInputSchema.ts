import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionReconciliationMatchCreateWithoutTransactionInputSchema } from './TransactionReconciliationMatchCreateWithoutTransactionInputSchema';
import { TransactionReconciliationMatchUncheckedCreateWithoutTransactionInputSchema } from './TransactionReconciliationMatchUncheckedCreateWithoutTransactionInputSchema';
import { TransactionReconciliationMatchCreateOrConnectWithoutTransactionInputSchema } from './TransactionReconciliationMatchCreateOrConnectWithoutTransactionInputSchema';
import { TransactionReconciliationMatchUpsertWithWhereUniqueWithoutTransactionInputSchema } from './TransactionReconciliationMatchUpsertWithWhereUniqueWithoutTransactionInputSchema';
import { TransactionReconciliationMatchCreateManyTransactionInputEnvelopeSchema } from './TransactionReconciliationMatchCreateManyTransactionInputEnvelopeSchema';
import { TransactionReconciliationMatchWhereUniqueInputSchema } from './TransactionReconciliationMatchWhereUniqueInputSchema';
import { TransactionReconciliationMatchUpdateWithWhereUniqueWithoutTransactionInputSchema } from './TransactionReconciliationMatchUpdateWithWhereUniqueWithoutTransactionInputSchema';
import { TransactionReconciliationMatchUpdateManyWithWhereWithoutTransactionInputSchema } from './TransactionReconciliationMatchUpdateManyWithWhereWithoutTransactionInputSchema';
import { TransactionReconciliationMatchScalarWhereInputSchema } from './TransactionReconciliationMatchScalarWhereInputSchema';

export const TransactionReconciliationMatchUncheckedUpdateManyWithoutTransactionNestedInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchUncheckedUpdateManyWithoutTransactionNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionReconciliationMatchCreateWithoutTransactionInputSchema),z.lazy(() => TransactionReconciliationMatchCreateWithoutTransactionInputSchema).array(),z.lazy(() => TransactionReconciliationMatchUncheckedCreateWithoutTransactionInputSchema),z.lazy(() => TransactionReconciliationMatchUncheckedCreateWithoutTransactionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionReconciliationMatchCreateOrConnectWithoutTransactionInputSchema),z.lazy(() => TransactionReconciliationMatchCreateOrConnectWithoutTransactionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TransactionReconciliationMatchUpsertWithWhereUniqueWithoutTransactionInputSchema),z.lazy(() => TransactionReconciliationMatchUpsertWithWhereUniqueWithoutTransactionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionReconciliationMatchCreateManyTransactionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TransactionReconciliationMatchWhereUniqueInputSchema),z.lazy(() => TransactionReconciliationMatchWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TransactionReconciliationMatchWhereUniqueInputSchema),z.lazy(() => TransactionReconciliationMatchWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TransactionReconciliationMatchWhereUniqueInputSchema),z.lazy(() => TransactionReconciliationMatchWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionReconciliationMatchWhereUniqueInputSchema),z.lazy(() => TransactionReconciliationMatchWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TransactionReconciliationMatchUpdateWithWhereUniqueWithoutTransactionInputSchema),z.lazy(() => TransactionReconciliationMatchUpdateWithWhereUniqueWithoutTransactionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TransactionReconciliationMatchUpdateManyWithWhereWithoutTransactionInputSchema),z.lazy(() => TransactionReconciliationMatchUpdateManyWithWhereWithoutTransactionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TransactionReconciliationMatchScalarWhereInputSchema),z.lazy(() => TransactionReconciliationMatchScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TransactionReconciliationMatchUncheckedUpdateManyWithoutTransactionNestedInputSchema;
