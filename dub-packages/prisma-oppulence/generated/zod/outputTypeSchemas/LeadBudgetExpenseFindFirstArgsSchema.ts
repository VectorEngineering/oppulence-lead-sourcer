import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadBudgetExpenseIncludeSchema } from '../inputTypeSchemas/LeadBudgetExpenseIncludeSchema'
import { LeadBudgetExpenseWhereInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseWhereInputSchema'
import { LeadBudgetExpenseOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseOrderByWithRelationInputSchema'
import { LeadBudgetExpenseWhereUniqueInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseWhereUniqueInputSchema'
import { LeadBudgetExpenseScalarFieldEnumSchema } from '../inputTypeSchemas/LeadBudgetExpenseScalarFieldEnumSchema'
import { LeadBudgetArgsSchema } from "../outputTypeSchemas/LeadBudgetArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const LeadBudgetExpenseFindFirstArgsSchema: z.ZodType<Prisma.LeadBudgetExpenseFindFirstArgs> = z.object({
  select: LeadBudgetExpenseSelectSchema.optional(),
  include: LeadBudgetExpenseIncludeSchema.optional(),
  where: LeadBudgetExpenseWhereInputSchema.optional(),
  orderBy: z.union([ LeadBudgetExpenseOrderByWithRelationInputSchema.array(),LeadBudgetExpenseOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadBudgetExpenseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadBudgetExpenseScalarFieldEnumSchema,LeadBudgetExpenseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadBudgetExpenseFindFirstArgsSchema;
