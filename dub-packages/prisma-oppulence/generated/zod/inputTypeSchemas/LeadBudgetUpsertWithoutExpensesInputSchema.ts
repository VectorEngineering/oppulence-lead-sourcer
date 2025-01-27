import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetUpdateWithoutExpensesInputSchema } from './LeadBudgetUpdateWithoutExpensesInputSchema';
import { LeadBudgetUncheckedUpdateWithoutExpensesInputSchema } from './LeadBudgetUncheckedUpdateWithoutExpensesInputSchema';
import { LeadBudgetCreateWithoutExpensesInputSchema } from './LeadBudgetCreateWithoutExpensesInputSchema';
import { LeadBudgetUncheckedCreateWithoutExpensesInputSchema } from './LeadBudgetUncheckedCreateWithoutExpensesInputSchema';
import { LeadBudgetWhereInputSchema } from './LeadBudgetWhereInputSchema';

export const LeadBudgetUpsertWithoutExpensesInputSchema: z.ZodType<Prisma.LeadBudgetUpsertWithoutExpensesInput> = z.object({
  update: z.union([ z.lazy(() => LeadBudgetUpdateWithoutExpensesInputSchema),z.lazy(() => LeadBudgetUncheckedUpdateWithoutExpensesInputSchema) ]),
  create: z.union([ z.lazy(() => LeadBudgetCreateWithoutExpensesInputSchema),z.lazy(() => LeadBudgetUncheckedCreateWithoutExpensesInputSchema) ]),
  where: z.lazy(() => LeadBudgetWhereInputSchema).optional()
}).strict();

export default LeadBudgetUpsertWithoutExpensesInputSchema;
