import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompetitorWhereInputSchema } from '../inputTypeSchemas/LeadCompetitorWhereInputSchema'
import { LeadCompetitorOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadCompetitorOrderByWithRelationInputSchema'
import { LeadCompetitorWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCompetitorWhereUniqueInputSchema'

export const LeadCompetitorAggregateArgsSchema: z.ZodType<Prisma.LeadCompetitorAggregateArgs> = z.object({
  where: LeadCompetitorWhereInputSchema.optional(),
  orderBy: z.union([ LeadCompetitorOrderByWithRelationInputSchema.array(),LeadCompetitorOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadCompetitorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadCompetitorAggregateArgsSchema;
