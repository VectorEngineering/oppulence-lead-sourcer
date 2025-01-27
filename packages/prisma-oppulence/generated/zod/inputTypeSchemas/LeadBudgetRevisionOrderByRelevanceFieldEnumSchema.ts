import { z } from 'zod';

export const LeadBudgetRevisionOrderByRelevanceFieldEnumSchema = z.enum(['id','budgetId','reason','approvedBy']);

export default LeadBudgetRevisionOrderByRelevanceFieldEnumSchema;
