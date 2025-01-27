import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadScoreHistoryWhereInputSchema } from '../inputTypeSchemas/LeadScoreHistoryWhereInputSchema'
import { LeadScoreHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadScoreHistoryOrderByWithRelationInputSchema'
import { LeadScoreHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadScoreHistoryWhereUniqueInputSchema'

export const LeadScoreHistoryAggregateArgsSchema: z.ZodType<Prisma.LeadScoreHistoryAggregateArgs> = z.object({
  where: LeadScoreHistoryWhereInputSchema.optional(),
  orderBy: z.union([ LeadScoreHistoryOrderByWithRelationInputSchema.array(),LeadScoreHistoryOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadScoreHistoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadScoreHistoryAggregateArgsSchema;
