import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadRequirementWhereInputSchema } from '../inputTypeSchemas/LeadRequirementWhereInputSchema'
import { LeadRequirementOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadRequirementOrderByWithRelationInputSchema'
import { LeadRequirementWhereUniqueInputSchema } from '../inputTypeSchemas/LeadRequirementWhereUniqueInputSchema'

export const LeadRequirementAggregateArgsSchema: z.ZodType<Prisma.LeadRequirementAggregateArgs> = z.object({
  where: LeadRequirementWhereInputSchema.optional(),
  orderBy: z.union([ LeadRequirementOrderByWithRelationInputSchema.array(),LeadRequirementOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadRequirementWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadRequirementAggregateArgsSchema;
