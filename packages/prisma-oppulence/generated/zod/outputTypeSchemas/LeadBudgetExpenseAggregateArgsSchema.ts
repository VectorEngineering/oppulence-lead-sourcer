import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadBudgetExpenseWhereInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseWhereInputSchema'
import { LeadBudgetExpenseOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseOrderByWithRelationInputSchema'
import { LeadBudgetExpenseWhereUniqueInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseWhereUniqueInputSchema'

export const LeadBudgetExpenseAggregateArgsSchema: z.ZodType<Prisma.LeadBudgetExpenseAggregateArgs> = z.object({
  where: LeadBudgetExpenseWhereInputSchema.optional(),
  orderBy: z.union([ LeadBudgetExpenseOrderByWithRelationInputSchema.array(),LeadBudgetExpenseOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadBudgetExpenseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadBudgetExpenseAggregateArgsSchema;
