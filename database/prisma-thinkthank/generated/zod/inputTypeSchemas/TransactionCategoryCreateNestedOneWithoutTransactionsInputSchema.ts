import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCategoryCreateWithoutTransactionsInputSchema } from './TransactionCategoryCreateWithoutTransactionsInputSchema';
import { TransactionCategoryUncheckedCreateWithoutTransactionsInputSchema } from './TransactionCategoryUncheckedCreateWithoutTransactionsInputSchema';
import { TransactionCategoryCreateOrConnectWithoutTransactionsInputSchema } from './TransactionCategoryCreateOrConnectWithoutTransactionsInputSchema';
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema';

export const TransactionCategoryCreateNestedOneWithoutTransactionsInputSchema: z.ZodType<Prisma.TransactionCategoryCreateNestedOneWithoutTransactionsInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCategoryCreateWithoutTransactionsInputSchema),z.lazy(() => TransactionCategoryUncheckedCreateWithoutTransactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TransactionCategoryCreateOrConnectWithoutTransactionsInputSchema).optional(),
  connect: z.lazy(() => TransactionCategoryWhereUniqueInputSchema).optional()
}).strict();

export default TransactionCategoryCreateNestedOneWithoutTransactionsInputSchema;
