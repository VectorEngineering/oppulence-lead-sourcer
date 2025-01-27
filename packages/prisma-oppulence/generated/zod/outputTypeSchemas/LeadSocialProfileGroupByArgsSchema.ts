import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSocialProfileWhereInputSchema } from '../inputTypeSchemas/LeadSocialProfileWhereInputSchema'
import { LeadSocialProfileOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadSocialProfileOrderByWithAggregationInputSchema'
import { LeadSocialProfileScalarFieldEnumSchema } from '../inputTypeSchemas/LeadSocialProfileScalarFieldEnumSchema'
import { LeadSocialProfileScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadSocialProfileScalarWhereWithAggregatesInputSchema'

export const LeadSocialProfileGroupByArgsSchema: z.ZodType<Prisma.LeadSocialProfileGroupByArgs> = z.object({
  where: LeadSocialProfileWhereInputSchema.optional(),
  orderBy: z.union([ LeadSocialProfileOrderByWithAggregationInputSchema.array(),LeadSocialProfileOrderByWithAggregationInputSchema ]).optional(),
  by: LeadSocialProfileScalarFieldEnumSchema.array(),
  having: LeadSocialProfileScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadSocialProfileGroupByArgsSchema;
