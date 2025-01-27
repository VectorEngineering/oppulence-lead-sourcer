import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionUpdateWithoutAttachmentsInputSchema } from './TransactionUpdateWithoutAttachmentsInputSchema';
import { TransactionUncheckedUpdateWithoutAttachmentsInputSchema } from './TransactionUncheckedUpdateWithoutAttachmentsInputSchema';
import { TransactionCreateWithoutAttachmentsInputSchema } from './TransactionCreateWithoutAttachmentsInputSchema';
import { TransactionUncheckedCreateWithoutAttachmentsInputSchema } from './TransactionUncheckedCreateWithoutAttachmentsInputSchema';
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema';

export const TransactionUpsertWithoutAttachmentsInputSchema: z.ZodType<Prisma.TransactionUpsertWithoutAttachmentsInput> = z.object({
  update: z.union([ z.lazy(() => TransactionUpdateWithoutAttachmentsInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutAttachmentsInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionCreateWithoutAttachmentsInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutAttachmentsInputSchema) ]),
  where: z.lazy(() => TransactionWhereInputSchema).optional()
}).strict();

export default TransactionUpsertWithoutAttachmentsInputSchema;
