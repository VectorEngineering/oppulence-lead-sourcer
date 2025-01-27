import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema';
import { TransactionCategoryCreateWithoutTransactionsInputSchema } from './TransactionCategoryCreateWithoutTransactionsInputSchema';
import { TransactionCategoryUncheckedCreateWithoutTransactionsInputSchema } from './TransactionCategoryUncheckedCreateWithoutTransactionsInputSchema';

export const TransactionCategoryCreateOrConnectWithoutTransactionsInputSchema: z.ZodType<Prisma.TransactionCategoryCreateOrConnectWithoutTransactionsInput> = z.object({
  where: z.lazy(() => TransactionCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionCategoryCreateWithoutTransactionsInputSchema),z.lazy(() => TransactionCategoryUncheckedCreateWithoutTransactionsInputSchema) ]),
}).strict();

export default TransactionCategoryCreateOrConnectWithoutTransactionsInputSchema;
