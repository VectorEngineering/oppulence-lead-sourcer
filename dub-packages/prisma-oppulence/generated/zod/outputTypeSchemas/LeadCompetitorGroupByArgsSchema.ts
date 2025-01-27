import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompetitorWhereInputSchema } from '../inputTypeSchemas/LeadCompetitorWhereInputSchema'
import { LeadCompetitorOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadCompetitorOrderByWithAggregationInputSchema'
import { LeadCompetitorScalarFieldEnumSchema } from '../inputTypeSchemas/LeadCompetitorScalarFieldEnumSchema'
import { LeadCompetitorScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadCompetitorScalarWhereWithAggregatesInputSchema'

export const LeadCompetitorGroupByArgsSchema: z.ZodType<Prisma.LeadCompetitorGroupByArgs> = z.object({
  where: LeadCompetitorWhereInputSchema.optional(),
  orderBy: z.union([ LeadCompetitorOrderByWithAggregationInputSchema.array(),LeadCompetitorOrderByWithAggregationInputSchema ]).optional(),
  by: LeadCompetitorScalarFieldEnumSchema.array(),
  having: LeadCompetitorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadCompetitorGroupByArgsSchema;
