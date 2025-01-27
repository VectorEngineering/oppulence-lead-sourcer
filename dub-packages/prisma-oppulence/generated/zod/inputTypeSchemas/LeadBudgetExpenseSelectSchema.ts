import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadBudgetArgsSchema } from "../outputTypeSchemas/LeadBudgetArgsSchema"

export const LeadBudgetExpenseSelectSchema: z.ZodType<Prisma.LeadBudgetExpenseSelect> = z.object({
  id: z.boolean().optional(),
  budgetId: z.boolean().optional(),
  amount: z.boolean().optional(),
  category: z.boolean().optional(),
  description: z.boolean().optional(),
  receipt: z.boolean().optional(),
  expenseDate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  budget: z.union([z.boolean(),z.lazy(() => LeadBudgetArgsSchema)]).optional(),
}).strict()

export default LeadBudgetExpenseSelectSchema;
