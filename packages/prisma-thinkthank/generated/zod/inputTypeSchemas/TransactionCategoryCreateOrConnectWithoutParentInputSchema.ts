import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema';
import { TransactionCategoryCreateWithoutParentInputSchema } from './TransactionCategoryCreateWithoutParentInputSchema';
import { TransactionCategoryUncheckedCreateWithoutParentInputSchema } from './TransactionCategoryUncheckedCreateWithoutParentInputSchema';

export const TransactionCategoryCreateOrConnectWithoutParentInputSchema: z.ZodType<Prisma.TransactionCategoryCreateOrConnectWithoutParentInput> = z.object({
  where: z.lazy(() => TransactionCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionCategoryCreateWithoutParentInputSchema),z.lazy(() => TransactionCategoryUncheckedCreateWithoutParentInputSchema) ]),
}).strict();

export default TransactionCategoryCreateOrConnectWithoutParentInputSchema;
