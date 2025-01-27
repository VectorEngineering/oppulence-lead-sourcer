import { z } from 'zod';

/////////////////////////////////////////
// LEAD BUDGET EXPENSE SCHEMA
/////////////////////////////////////////

export const LeadBudgetExpenseSchema = z.object({
  id: z.string().cuid(),
  budgetId: z.string(),
  amount: z.number(),
  category: z.string(),
  description: z.string(),
  receipt: z.string().nullish(),
  expenseDate: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type LeadBudgetExpense = z.infer<typeof LeadBudgetExpenseSchema>

/////////////////////////////////////////
// LEAD BUDGET EXPENSE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadBudgetExpenseOptionalDefaultsSchema = LeadBudgetExpenseSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
}))

export type LeadBudgetExpenseOptionalDefaults = z.infer<typeof LeadBudgetExpenseOptionalDefaultsSchema>

export default LeadBudgetExpenseSchema;
