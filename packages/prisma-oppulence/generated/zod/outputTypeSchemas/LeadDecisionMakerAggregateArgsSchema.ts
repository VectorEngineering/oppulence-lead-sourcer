import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadDecisionMakerWhereInputSchema } from '../inputTypeSchemas/LeadDecisionMakerWhereInputSchema'
import { LeadDecisionMakerOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadDecisionMakerOrderByWithRelationInputSchema'
import { LeadDecisionMakerWhereUniqueInputSchema } from '../inputTypeSchemas/LeadDecisionMakerWhereUniqueInputSchema'

export const LeadDecisionMakerAggregateArgsSchema: z.ZodType<Prisma.LeadDecisionMakerAggregateArgs> = z.object({
  where: LeadDecisionMakerWhereInputSchema.optional(),
  orderBy: z.union([ LeadDecisionMakerOrderByWithRelationInputSchema.array(),LeadDecisionMakerOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadDecisionMakerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadDecisionMakerAggregateArgsSchema;
