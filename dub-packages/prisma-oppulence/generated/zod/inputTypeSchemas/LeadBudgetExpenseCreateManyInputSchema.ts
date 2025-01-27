import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadBudgetExpenseCreateManyInputSchema: z.ZodType<Prisma.LeadBudgetExpenseCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  budgetId: z.string(),
  amount: z.number(),
  category: z.string(),
  description: z.string(),
  receipt: z.string().optional().nullable(),
  expenseDate: z.coerce.date(),
  createdAt: z.coerce.date().optional()
}).strict();

export default LeadBudgetExpenseCreateManyInputSchema;
