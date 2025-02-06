import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCreateWithoutAttachmentsInputSchema } from './TransactionCreateWithoutAttachmentsInputSchema';
import { TransactionUncheckedCreateWithoutAttachmentsInputSchema } from './TransactionUncheckedCreateWithoutAttachmentsInputSchema';
import { TransactionCreateOrConnectWithoutAttachmentsInputSchema } from './TransactionCreateOrConnectWithoutAttachmentsInputSchema';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';

export const TransactionCreateNestedOneWithoutAttachmentsInputSchema: z.ZodType<Prisma.TransactionCreateNestedOneWithoutAttachmentsInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutAttachmentsInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutAttachmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TransactionCreateOrConnectWithoutAttachmentsInputSchema).optional(),
  connect: z.lazy(() => TransactionWhereUniqueInputSchema).optional()
}).strict();

export default TransactionCreateNestedOneWithoutAttachmentsInputSchema;
