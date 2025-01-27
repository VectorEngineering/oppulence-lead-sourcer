import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadContactPreferenceWhereInputSchema } from '../inputTypeSchemas/LeadContactPreferenceWhereInputSchema'
import { LeadContactPreferenceOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadContactPreferenceOrderByWithAggregationInputSchema'
import { LeadContactPreferenceScalarFieldEnumSchema } from '../inputTypeSchemas/LeadContactPreferenceScalarFieldEnumSchema'
import { LeadContactPreferenceScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadContactPreferenceScalarWhereWithAggregatesInputSchema'

export const LeadContactPreferenceGroupByArgsSchema: z.ZodType<Prisma.LeadContactPreferenceGroupByArgs> = z.object({
  where: LeadContactPreferenceWhereInputSchema.optional(),
  orderBy: z.union([ LeadContactPreferenceOrderByWithAggregationInputSchema.array(),LeadContactPreferenceOrderByWithAggregationInputSchema ]).optional(),
  by: LeadContactPreferenceScalarFieldEnumSchema.array(),
  having: LeadContactPreferenceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadContactPreferenceGroupByArgsSchema;
