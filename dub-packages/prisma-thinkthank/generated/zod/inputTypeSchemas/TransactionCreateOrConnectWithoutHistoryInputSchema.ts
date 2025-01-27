import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionCreateWithoutHistoryInputSchema } from './TransactionCreateWithoutHistoryInputSchema';
import { TransactionUncheckedCreateWithoutHistoryInputSchema } from './TransactionUncheckedCreateWithoutHistoryInputSchema';

export const TransactionCreateOrConnectWithoutHistoryInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutHistoryInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionCreateWithoutHistoryInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutHistoryInputSchema) ]),
}).strict();

export default TransactionCreateOrConnectWithoutHistoryInputSchema;
