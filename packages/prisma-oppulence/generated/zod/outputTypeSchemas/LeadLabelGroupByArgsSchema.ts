import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadLabelWhereInputSchema } from '../inputTypeSchemas/LeadLabelWhereInputSchema'
import { LeadLabelOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadLabelOrderByWithAggregationInputSchema'
import { LeadLabelScalarFieldEnumSchema } from '../inputTypeSchemas/LeadLabelScalarFieldEnumSchema'
import { LeadLabelScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadLabelScalarWhereWithAggregatesInputSchema'

export const LeadLabelGroupByArgsSchema: z.ZodType<Prisma.LeadLabelGroupByArgs> = z.object({
  where: LeadLabelWhereInputSchema.optional(),
  orderBy: z.union([ LeadLabelOrderByWithAggregationInputSchema.array(),LeadLabelOrderByWithAggregationInputSchema ]).optional(),
  by: LeadLabelScalarFieldEnumSchema.array(),
  having: LeadLabelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadLabelGroupByArgsSchema;
