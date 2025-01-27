import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCreateWithoutCommentsInputSchema } from './TransactionCreateWithoutCommentsInputSchema';
import { TransactionUncheckedCreateWithoutCommentsInputSchema } from './TransactionUncheckedCreateWithoutCommentsInputSchema';
import { TransactionCreateOrConnectWithoutCommentsInputSchema } from './TransactionCreateOrConnectWithoutCommentsInputSchema';
import { TransactionUpsertWithoutCommentsInputSchema } from './TransactionUpsertWithoutCommentsInputSchema';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionUpdateToOneWithWhereWithoutCommentsInputSchema } from './TransactionUpdateToOneWithWhereWithoutCommentsInputSchema';
import { TransactionUpdateWithoutCommentsInputSchema } from './TransactionUpdateWithoutCommentsInputSchema';
import { TransactionUncheckedUpdateWithoutCommentsInputSchema } from './TransactionUncheckedUpdateWithoutCommentsInputSchema';

export const TransactionUpdateOneRequiredWithoutCommentsNestedInputSchema: z.ZodType<Prisma.TransactionUpdateOneRequiredWithoutCommentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutCommentsInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TransactionCreateOrConnectWithoutCommentsInputSchema).optional(),
  upsert: z.lazy(() => TransactionUpsertWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => TransactionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TransactionUpdateToOneWithWhereWithoutCommentsInputSchema),z.lazy(() => TransactionUpdateWithoutCommentsInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutCommentsInputSchema) ]).optional(),
}).strict();

export default TransactionUpdateOneRequiredWithoutCommentsNestedInputSchema;
