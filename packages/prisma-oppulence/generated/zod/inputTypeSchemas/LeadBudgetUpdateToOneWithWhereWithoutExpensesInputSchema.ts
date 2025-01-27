import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetWhereInputSchema } from './LeadBudgetWhereInputSchema';
import { LeadBudgetUpdateWithoutExpensesInputSchema } from './LeadBudgetUpdateWithoutExpensesInputSchema';
import { LeadBudgetUncheckedUpdateWithoutExpensesInputSchema } from './LeadBudgetUncheckedUpdateWithoutExpensesInputSchema';

export const LeadBudgetUpdateToOneWithWhereWithoutExpensesInputSchema: z.ZodType<Prisma.LeadBudgetUpdateToOneWithWhereWithoutExpensesInput> = z.object({
  where: z.lazy(() => LeadBudgetWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LeadBudgetUpdateWithoutExpensesInputSchema),z.lazy(() => LeadBudgetUncheckedUpdateWithoutExpensesInputSchema) ]),
}).strict();

export default LeadBudgetUpdateToOneWithWhereWithoutExpensesInputSchema;
