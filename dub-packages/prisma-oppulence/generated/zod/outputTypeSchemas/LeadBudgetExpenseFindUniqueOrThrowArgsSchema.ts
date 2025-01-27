import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadBudgetExpenseIncludeSchema } from '../inputTypeSchemas/LeadBudgetExpenseIncludeSchema'
import { LeadBudgetExpenseWhereUniqueInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseWhereUniqueInputSchema'
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

export const LeadBudgetExpenseFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LeadBudgetExpenseFindUniqueOrThrowArgs> = z.object({
  select: LeadBudgetExpenseSelectSchema.optional(),
  include: LeadBudgetExpenseIncludeSchema.optional(),
  where: LeadBudgetExpenseWhereUniqueInputSchema,
}).strict() ;

export default LeadBudgetExpenseFindUniqueOrThrowArgsSchema;
