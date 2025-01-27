import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompetitiveHistoryWhereInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryWhereInputSchema'
import { LeadCompetitiveHistoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryOrderByWithAggregationInputSchema'
import { LeadCompetitiveHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryScalarFieldEnumSchema'
import { LeadCompetitiveHistoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryScalarWhereWithAggregatesInputSchema'

export const LeadCompetitiveHistoryGroupByArgsSchema: z.ZodType<Prisma.LeadCompetitiveHistoryGroupByArgs> = z.object({
  where: LeadCompetitiveHistoryWhereInputSchema.optional(),
  orderBy: z.union([ LeadCompetitiveHistoryOrderByWithAggregationInputSchema.array(),LeadCompetitiveHistoryOrderByWithAggregationInputSchema ]).optional(),
  by: LeadCompetitiveHistoryScalarFieldEnumSchema.array(),
  having: LeadCompetitiveHistoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadCompetitiveHistoryGroupByArgsSchema;
