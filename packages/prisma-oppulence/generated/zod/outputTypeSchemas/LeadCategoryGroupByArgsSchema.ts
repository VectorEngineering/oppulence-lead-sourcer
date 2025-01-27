import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCategoryWhereInputSchema } from '../inputTypeSchemas/LeadCategoryWhereInputSchema'
import { LeadCategoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadCategoryOrderByWithAggregationInputSchema'
import { LeadCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/LeadCategoryScalarFieldEnumSchema'
import { LeadCategoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadCategoryScalarWhereWithAggregatesInputSchema'

export const LeadCategoryGroupByArgsSchema: z.ZodType<Prisma.LeadCategoryGroupByArgs> = z.object({
  where: LeadCategoryWhereInputSchema.optional(),
  orderBy: z.union([ LeadCategoryOrderByWithAggregationInputSchema.array(),LeadCategoryOrderByWithAggregationInputSchema ]).optional(),
  by: LeadCategoryScalarFieldEnumSchema.array(),
  having: LeadCategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadCategoryGroupByArgsSchema;
