import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionCreateWithoutCommentsInputSchema } from './TransactionCreateWithoutCommentsInputSchema';
import { TransactionUncheckedCreateWithoutCommentsInputSchema } from './TransactionUncheckedCreateWithoutCommentsInputSchema';

export const TransactionCreateOrConnectWithoutCommentsInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutCommentsInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionCreateWithoutCommentsInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutCommentsInputSchema) ]),
}).strict();

export default TransactionCreateOrConnectWithoutCommentsInputSchema;
