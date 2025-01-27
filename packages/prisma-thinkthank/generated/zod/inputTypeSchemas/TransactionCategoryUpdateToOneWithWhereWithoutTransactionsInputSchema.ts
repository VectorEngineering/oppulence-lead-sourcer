import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCategoryWhereInputSchema } from './TransactionCategoryWhereInputSchema';
import { TransactionCategoryUpdateWithoutTransactionsInputSchema } from './TransactionCategoryUpdateWithoutTransactionsInputSchema';
import { TransactionCategoryUncheckedUpdateWithoutTransactionsInputSchema } from './TransactionCategoryUncheckedUpdateWithoutTransactionsInputSchema';

export const TransactionCategoryUpdateToOneWithWhereWithoutTransactionsInputSchema: z.ZodType<Prisma.TransactionCategoryUpdateToOneWithWhereWithoutTransactionsInput> = z.object({
  where: z.lazy(() => TransactionCategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TransactionCategoryUpdateWithoutTransactionsInputSchema),z.lazy(() => TransactionCategoryUncheckedUpdateWithoutTransactionsInputSchema) ]),
}).strict();

export default TransactionCategoryUpdateToOneWithWhereWithoutTransactionsInputSchema;
