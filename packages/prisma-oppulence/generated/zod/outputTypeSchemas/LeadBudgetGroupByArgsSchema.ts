import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadBudgetWhereInputSchema } from '../inputTypeSchemas/LeadBudgetWhereInputSchema'
import { LeadBudgetOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadBudgetOrderByWithAggregationInputSchema'
import { LeadBudgetScalarFieldEnumSchema } from '../inputTypeSchemas/LeadBudgetScalarFieldEnumSchema'
import { LeadBudgetScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadBudgetScalarWhereWithAggregatesInputSchema'

export const LeadBudgetGroupByArgsSchema: z.ZodType<Prisma.LeadBudgetGroupByArgs> = z.object({
  where: LeadBudgetWhereInputSchema.optional(),
  orderBy: z.union([ LeadBudgetOrderByWithAggregationInputSchema.array(),LeadBudgetOrderByWithAggregationInputSchema ]).optional(),
  by: LeadBudgetScalarFieldEnumSchema.array(),
  having: LeadBudgetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadBudgetGroupByArgsSchema;
