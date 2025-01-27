import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema';
import { TransactionCategoryCreateWithoutChildrenInputSchema } from './TransactionCategoryCreateWithoutChildrenInputSchema';
import { TransactionCategoryUncheckedCreateWithoutChildrenInputSchema } from './TransactionCategoryUncheckedCreateWithoutChildrenInputSchema';

export const TransactionCategoryCreateOrConnectWithoutChildrenInputSchema: z.ZodType<Prisma.TransactionCategoryCreateOrConnectWithoutChildrenInput> = z.object({
  where: z.lazy(() => TransactionCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionCategoryCreateWithoutChildrenInputSchema),z.lazy(() => TransactionCategoryUncheckedCreateWithoutChildrenInputSchema) ]),
}).strict();

export default TransactionCategoryCreateOrConnectWithoutChildrenInputSchema;
