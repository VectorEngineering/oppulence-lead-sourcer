import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCategoryWhereInputSchema } from './TransactionCategoryWhereInputSchema';
import { TransactionCategoryUpdateWithoutChildrenInputSchema } from './TransactionCategoryUpdateWithoutChildrenInputSchema';
import { TransactionCategoryUncheckedUpdateWithoutChildrenInputSchema } from './TransactionCategoryUncheckedUpdateWithoutChildrenInputSchema';

export const TransactionCategoryUpdateToOneWithWhereWithoutChildrenInputSchema: z.ZodType<Prisma.TransactionCategoryUpdateToOneWithWhereWithoutChildrenInput> = z.object({
  where: z.lazy(() => TransactionCategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TransactionCategoryUpdateWithoutChildrenInputSchema),z.lazy(() => TransactionCategoryUncheckedUpdateWithoutChildrenInputSchema) ]),
}).strict();

export default TransactionCategoryUpdateToOneWithWhereWithoutChildrenInputSchema;
