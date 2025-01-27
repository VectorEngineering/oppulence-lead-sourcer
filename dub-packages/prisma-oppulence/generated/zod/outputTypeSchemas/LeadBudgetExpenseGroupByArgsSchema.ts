import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadBudgetExpenseWhereInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseWhereInputSchema'
import { LeadBudgetExpenseOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseOrderByWithAggregationInputSchema'
import { LeadBudgetExpenseScalarFieldEnumSchema } from '../inputTypeSchemas/LeadBudgetExpenseScalarFieldEnumSchema'
import { LeadBudgetExpenseScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseScalarWhereWithAggregatesInputSchema'

export const LeadBudgetExpenseGroupByArgsSchema: z.ZodType<Prisma.LeadBudgetExpenseGroupByArgs> = z.object({
  where: LeadBudgetExpenseWhereInputSchema.optional(),
  orderBy: z.union([ LeadBudgetExpenseOrderByWithAggregationInputSchema.array(),LeadBudgetExpenseOrderByWithAggregationInputSchema ]).optional(),
  by: LeadBudgetExpenseScalarFieldEnumSchema.array(),
  having: LeadBudgetExpenseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadBudgetExpenseGroupByArgsSchema;
