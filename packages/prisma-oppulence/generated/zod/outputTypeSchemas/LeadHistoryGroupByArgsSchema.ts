import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadHistoryWhereInputSchema } from '../inputTypeSchemas/LeadHistoryWhereInputSchema'
import { LeadHistoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadHistoryOrderByWithAggregationInputSchema'
import { LeadHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/LeadHistoryScalarFieldEnumSchema'
import { LeadHistoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadHistoryScalarWhereWithAggregatesInputSchema'

export const LeadHistoryGroupByArgsSchema: z.ZodType<Prisma.LeadHistoryGroupByArgs> = z.object({
  where: LeadHistoryWhereInputSchema.optional(),
  orderBy: z.union([ LeadHistoryOrderByWithAggregationInputSchema.array(),LeadHistoryOrderByWithAggregationInputSchema ]).optional(),
  by: LeadHistoryScalarFieldEnumSchema.array(),
  having: LeadHistoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadHistoryGroupByArgsSchema;
