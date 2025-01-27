import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema';
import { TransactionUpdateWithoutCommentsInputSchema } from './TransactionUpdateWithoutCommentsInputSchema';
import { TransactionUncheckedUpdateWithoutCommentsInputSchema } from './TransactionUncheckedUpdateWithoutCommentsInputSchema';

export const TransactionUpdateToOneWithWhereWithoutCommentsInputSchema: z.ZodType<Prisma.TransactionUpdateToOneWithWhereWithoutCommentsInput> = z.object({
  where: z.lazy(() => TransactionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TransactionUpdateWithoutCommentsInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutCommentsInputSchema) ]),
}).strict();

export default TransactionUpdateToOneWithWhereWithoutCommentsInputSchema;
