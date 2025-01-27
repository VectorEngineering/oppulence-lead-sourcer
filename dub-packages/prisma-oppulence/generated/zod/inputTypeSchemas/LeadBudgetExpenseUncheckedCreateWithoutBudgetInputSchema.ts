import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema: z.ZodType<Prisma.LeadBudgetExpenseUncheckedCreateWithoutBudgetInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  category: z.string(),
  description: z.string(),
  receipt: z.string().optional().nullable(),
  expenseDate: z.coerce.date(),
  createdAt: z.coerce.date().optional()
}).strict();

export default LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema;
