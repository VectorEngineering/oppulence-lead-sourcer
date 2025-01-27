import { z } from 'zod';

export const LeadBudgetExpenseScalarFieldEnumSchema = z.enum(['id','budgetId','amount','category','description','receipt','expenseDate','createdAt']);

export default LeadBudgetExpenseScalarFieldEnumSchema;
