import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionUpdateWithoutAssignedToInputSchema } from './TransactionUpdateWithoutAssignedToInputSchema';
import { TransactionUncheckedUpdateWithoutAssignedToInputSchema } from './TransactionUncheckedUpdateWithoutAssignedToInputSchema';
import { TransactionCreateWithoutAssignedToInputSchema } from './TransactionCreateWithoutAssignedToInputSchema';
import { TransactionUncheckedCreateWithoutAssignedToInputSchema } from './TransactionUncheckedCreateWithoutAssignedToInputSchema';

export const TransactionUpsertWithWhereUniqueWithoutAssignedToInputSchema: z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutAssignedToInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TransactionUpdateWithoutAssignedToInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutAssignedToInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionCreateWithoutAssignedToInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutAssignedToInputSchema) ]),
}).strict();

export default TransactionUpsertWithWhereUniqueWithoutAssignedToInputSchema;
