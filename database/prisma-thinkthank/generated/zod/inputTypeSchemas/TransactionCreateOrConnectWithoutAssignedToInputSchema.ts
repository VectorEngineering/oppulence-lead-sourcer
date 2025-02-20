import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionCreateWithoutAssignedToInputSchema } from './TransactionCreateWithoutAssignedToInputSchema';
import { TransactionUncheckedCreateWithoutAssignedToInputSchema } from './TransactionUncheckedCreateWithoutAssignedToInputSchema';

export const TransactionCreateOrConnectWithoutAssignedToInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutAssignedToInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionCreateWithoutAssignedToInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutAssignedToInputSchema) ]),
}).strict();

export default TransactionCreateOrConnectWithoutAssignedToInputSchema;
