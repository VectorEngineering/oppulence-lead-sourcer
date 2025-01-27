import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCategoryUpdateWithoutChildrenInputSchema } from './TransactionCategoryUpdateWithoutChildrenInputSchema';
import { TransactionCategoryUncheckedUpdateWithoutChildrenInputSchema } from './TransactionCategoryUncheckedUpdateWithoutChildrenInputSchema';
import { TransactionCategoryCreateWithoutChildrenInputSchema } from './TransactionCategoryCreateWithoutChildrenInputSchema';
import { TransactionCategoryUncheckedCreateWithoutChildrenInputSchema } from './TransactionCategoryUncheckedCreateWithoutChildrenInputSchema';
import { TransactionCategoryWhereInputSchema } from './TransactionCategoryWhereInputSchema';

export const TransactionCategoryUpsertWithoutChildrenInputSchema: z.ZodType<Prisma.TransactionCategoryUpsertWithoutChildrenInput> = z.object({
  update: z.union([ z.lazy(() => TransactionCategoryUpdateWithoutChildrenInputSchema),z.lazy(() => TransactionCategoryUncheckedUpdateWithoutChildrenInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionCategoryCreateWithoutChildrenInputSchema),z.lazy(() => TransactionCategoryUncheckedCreateWithoutChildrenInputSchema) ]),
  where: z.lazy(() => TransactionCategoryWhereInputSchema).optional()
}).strict();

export default TransactionCategoryUpsertWithoutChildrenInputSchema;
