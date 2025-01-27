import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadPersonalDetailsWhereInputSchema } from '../inputTypeSchemas/LeadPersonalDetailsWhereInputSchema'
import { LeadPersonalDetailsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadPersonalDetailsOrderByWithAggregationInputSchema'
import { LeadPersonalDetailsScalarFieldEnumSchema } from '../inputTypeSchemas/LeadPersonalDetailsScalarFieldEnumSchema'
import { LeadPersonalDetailsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadPersonalDetailsScalarWhereWithAggregatesInputSchema'

export const LeadPersonalDetailsGroupByArgsSchema: z.ZodType<Prisma.LeadPersonalDetailsGroupByArgs> = z.object({
  where: LeadPersonalDetailsWhereInputSchema.optional(),
  orderBy: z.union([ LeadPersonalDetailsOrderByWithAggregationInputSchema.array(),LeadPersonalDetailsOrderByWithAggregationInputSchema ]).optional(),
  by: LeadPersonalDetailsScalarFieldEnumSchema.array(),
  having: LeadPersonalDetailsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadPersonalDetailsGroupByArgsSchema;
