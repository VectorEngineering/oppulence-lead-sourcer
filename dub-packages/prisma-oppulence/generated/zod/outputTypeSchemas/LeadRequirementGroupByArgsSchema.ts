import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadRequirementWhereInputSchema } from '../inputTypeSchemas/LeadRequirementWhereInputSchema'
import { LeadRequirementOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadRequirementOrderByWithAggregationInputSchema'
import { LeadRequirementScalarFieldEnumSchema } from '../inputTypeSchemas/LeadRequirementScalarFieldEnumSchema'
import { LeadRequirementScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadRequirementScalarWhereWithAggregatesInputSchema'

export const LeadRequirementGroupByArgsSchema: z.ZodType<Prisma.LeadRequirementGroupByArgs> = z.object({
  where: LeadRequirementWhereInputSchema.optional(),
  orderBy: z.union([ LeadRequirementOrderByWithAggregationInputSchema.array(),LeadRequirementOrderByWithAggregationInputSchema ]).optional(),
  by: LeadRequirementScalarFieldEnumSchema.array(),
  having: LeadRequirementScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadRequirementGroupByArgsSchema;
