import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadWhereInputSchema } from '../inputTypeSchemas/LeadWhereInputSchema'
import { LeadOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadOrderByWithAggregationInputSchema'
import { LeadScalarFieldEnumSchema } from '../inputTypeSchemas/LeadScalarFieldEnumSchema'
import { LeadScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadScalarWhereWithAggregatesInputSchema'

export const LeadGroupByArgsSchema: z.ZodType<Prisma.LeadGroupByArgs> = z.object({
  where: LeadWhereInputSchema.optional(),
  orderBy: z.union([ LeadOrderByWithAggregationInputSchema.array(),LeadOrderByWithAggregationInputSchema ]).optional(),
  by: LeadScalarFieldEnumSchema.array(),
  having: LeadScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadGroupByArgsSchema;
