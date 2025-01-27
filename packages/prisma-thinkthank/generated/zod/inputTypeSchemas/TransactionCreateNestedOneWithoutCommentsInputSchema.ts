import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCreateWithoutCommentsInputSchema } from './TransactionCreateWithoutCommentsInputSchema';
import { TransactionUncheckedCreateWithoutCommentsInputSchema } from './TransactionUncheckedCreateWithoutCommentsInputSchema';
import { TransactionCreateOrConnectWithoutCommentsInputSchema } from './TransactionCreateOrConnectWithoutCommentsInputSchema';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';

export const TransactionCreateNestedOneWithoutCommentsInputSchema: z.ZodType<Prisma.TransactionCreateNestedOneWithoutCommentsInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutCommentsInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TransactionCreateOrConnectWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => TransactionWhereUniqueInputSchema).optional()
}).strict();

export default TransactionCreateNestedOneWithoutCommentsInputSchema;
