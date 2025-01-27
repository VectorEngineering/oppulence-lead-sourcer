import { z } from 'zod';

export const LeadBudgetRevisionScalarFieldEnumSchema = z.enum(['id','budgetId','previousAmount','newAmount','reason','approvedBy','createdAt']);

export default LeadBudgetRevisionScalarFieldEnumSchema;
