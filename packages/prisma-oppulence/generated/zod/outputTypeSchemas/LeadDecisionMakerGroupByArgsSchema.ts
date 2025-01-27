import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadDecisionMakerWhereInputSchema } from '../inputTypeSchemas/LeadDecisionMakerWhereInputSchema'
import { LeadDecisionMakerOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadDecisionMakerOrderByWithAggregationInputSchema'
import { LeadDecisionMakerScalarFieldEnumSchema } from '../inputTypeSchemas/LeadDecisionMakerScalarFieldEnumSchema'
import { LeadDecisionMakerScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadDecisionMakerScalarWhereWithAggregatesInputSchema'

export const LeadDecisionMakerGroupByArgsSchema: z.ZodType<Prisma.LeadDecisionMakerGroupByArgs> = z.object({
  where: LeadDecisionMakerWhereInputSchema.optional(),
  orderBy: z.union([ LeadDecisionMakerOrderByWithAggregationInputSchema.array(),LeadDecisionMakerOrderByWithAggregationInputSchema ]).optional(),
  by: LeadDecisionMakerScalarFieldEnumSchema.array(),
  having: LeadDecisionMakerScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadDecisionMakerGroupByArgsSchema;
