import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetCreateNestedOneWithoutExpensesInputSchema } from './LeadBudgetCreateNestedOneWithoutExpensesInputSchema';

export const LeadBudgetExpenseCreateInputSchema: z.ZodType<Prisma.LeadBudgetExpenseCreateInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  category: z.string(),
  description: z.string(),
  receipt: z.string().optional().nullable(),
  expenseDate: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  budget: z.lazy(() => LeadBudgetCreateNestedOneWithoutExpensesInputSchema)
}).strict();

export default LeadBudgetExpenseCreateInputSchema;
