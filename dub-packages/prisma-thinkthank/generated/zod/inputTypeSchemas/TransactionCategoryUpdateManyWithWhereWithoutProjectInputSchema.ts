import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCategoryScalarWhereInputSchema } from './TransactionCategoryScalarWhereInputSchema';
import { TransactionCategoryUpdateManyMutationInputSchema } from './TransactionCategoryUpdateManyMutationInputSchema';
import { TransactionCategoryUncheckedUpdateManyWithoutProjectInputSchema } from './TransactionCategoryUncheckedUpdateManyWithoutProjectInputSchema';

export const TransactionCategoryUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.TransactionCategoryUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => TransactionCategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TransactionCategoryUpdateManyMutationInputSchema),z.lazy(() => TransactionCategoryUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default TransactionCategoryUpdateManyWithWhereWithoutProjectInputSchema;
