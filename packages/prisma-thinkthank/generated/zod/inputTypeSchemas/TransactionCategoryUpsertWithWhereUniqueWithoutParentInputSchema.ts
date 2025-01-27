import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema';
import { TransactionCategoryUpdateWithoutParentInputSchema } from './TransactionCategoryUpdateWithoutParentInputSchema';
import { TransactionCategoryUncheckedUpdateWithoutParentInputSchema } from './TransactionCategoryUncheckedUpdateWithoutParentInputSchema';
import { TransactionCategoryCreateWithoutParentInputSchema } from './TransactionCategoryCreateWithoutParentInputSchema';
import { TransactionCategoryUncheckedCreateWithoutParentInputSchema } from './TransactionCategoryUncheckedCreateWithoutParentInputSchema';

export const TransactionCategoryUpsertWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.TransactionCategoryUpsertWithWhereUniqueWithoutParentInput> = z.object({
  where: z.lazy(() => TransactionCategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TransactionCategoryUpdateWithoutParentInputSchema),z.lazy(() => TransactionCategoryUncheckedUpdateWithoutParentInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionCategoryCreateWithoutParentInputSchema),z.lazy(() => TransactionCategoryUncheckedCreateWithoutParentInputSchema) ]),
}).strict();

export default TransactionCategoryUpsertWithWhereUniqueWithoutParentInputSchema;
