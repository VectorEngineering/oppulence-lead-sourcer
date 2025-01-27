import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadRiskWhereInputSchema } from '../inputTypeSchemas/LeadRiskWhereInputSchema'
import { LeadRiskOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadRiskOrderByWithRelationInputSchema'
import { LeadRiskWhereUniqueInputSchema } from '../inputTypeSchemas/LeadRiskWhereUniqueInputSchema'

export const LeadRiskAggregateArgsSchema: z.ZodType<Prisma.LeadRiskAggregateArgs> = z.object({
  where: LeadRiskWhereInputSchema.optional(),
  orderBy: z.union([ LeadRiskOrderByWithRelationInputSchema.array(),LeadRiskOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadRiskWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadRiskAggregateArgsSchema;
