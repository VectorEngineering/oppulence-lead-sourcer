import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadScoreWhereInputSchema } from '../inputTypeSchemas/LeadScoreWhereInputSchema'
import { LeadScoreOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadScoreOrderByWithAggregationInputSchema'
import { LeadScoreScalarFieldEnumSchema } from '../inputTypeSchemas/LeadScoreScalarFieldEnumSchema'
import { LeadScoreScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadScoreScalarWhereWithAggregatesInputSchema'

export const LeadScoreGroupByArgsSchema: z.ZodType<Prisma.LeadScoreGroupByArgs> = z.object({
  where: LeadScoreWhereInputSchema.optional(),
  orderBy: z.union([ LeadScoreOrderByWithAggregationInputSchema.array(),LeadScoreOrderByWithAggregationInputSchema ]).optional(),
  by: LeadScoreScalarFieldEnumSchema.array(),
  having: LeadScoreScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadScoreGroupByArgsSchema;
