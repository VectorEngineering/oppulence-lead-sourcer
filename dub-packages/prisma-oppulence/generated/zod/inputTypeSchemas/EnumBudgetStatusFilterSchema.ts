import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BudgetStatusSchema } from './BudgetStatusSchema';
import { NestedEnumBudgetStatusFilterSchema } from './NestedEnumBudgetStatusFilterSchema';

export const EnumBudgetStatusFilterSchema: z.ZodType<Prisma.EnumBudgetStatusFilter> = z.object({
  equals: z.lazy(() => BudgetStatusSchema).optional(),
  in: z.lazy(() => BudgetStatusSchema).array().optional(),
  notIn: z.lazy(() => BudgetStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => BudgetStatusSchema),z.lazy(() => NestedEnumBudgetStatusFilterSchema) ]).optional(),
}).strict();

export default EnumBudgetStatusFilterSchema;
