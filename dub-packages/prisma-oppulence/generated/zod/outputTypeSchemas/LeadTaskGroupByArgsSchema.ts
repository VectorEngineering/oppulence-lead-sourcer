import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadTaskWhereInputSchema } from '../inputTypeSchemas/LeadTaskWhereInputSchema'
import { LeadTaskOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadTaskOrderByWithAggregationInputSchema'
import { LeadTaskScalarFieldEnumSchema } from '../inputTypeSchemas/LeadTaskScalarFieldEnumSchema'
import { LeadTaskScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadTaskScalarWhereWithAggregatesInputSchema'

export const LeadTaskGroupByArgsSchema: z.ZodType<Prisma.LeadTaskGroupByArgs> = z.object({
  where: LeadTaskWhereInputSchema.optional(),
  orderBy: z.union([ LeadTaskOrderByWithAggregationInputSchema.array(),LeadTaskOrderByWithAggregationInputSchema ]).optional(),
  by: LeadTaskScalarFieldEnumSchema.array(),
  having: LeadTaskScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadTaskGroupByArgsSchema;
