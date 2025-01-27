import { z } from 'zod';

export const LeadBudgetExpenseOrderByRelevanceFieldEnumSchema = z.enum(['id','budgetId','category','description','receipt']);

export default LeadBudgetExpenseOrderByRelevanceFieldEnumSchema;
