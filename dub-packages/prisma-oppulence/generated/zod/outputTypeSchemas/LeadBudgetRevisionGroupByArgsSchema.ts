import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadBudgetRevisionWhereInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionWhereInputSchema'
import { LeadBudgetRevisionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionOrderByWithAggregationInputSchema'
import { LeadBudgetRevisionScalarFieldEnumSchema } from '../inputTypeSchemas/LeadBudgetRevisionScalarFieldEnumSchema'
import { LeadBudgetRevisionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionScalarWhereWithAggregatesInputSchema'

export const LeadBudgetRevisionGroupByArgsSchema: z.ZodType<Prisma.LeadBudgetRevisionGroupByArgs> = z.object({
  where: LeadBudgetRevisionWhereInputSchema.optional(),
  orderBy: z.union([ LeadBudgetRevisionOrderByWithAggregationInputSchema.array(),LeadBudgetRevisionOrderByWithAggregationInputSchema ]).optional(),
  by: LeadBudgetRevisionScalarFieldEnumSchema.array(),
  having: LeadBudgetRevisionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadBudgetRevisionGroupByArgsSchema;
