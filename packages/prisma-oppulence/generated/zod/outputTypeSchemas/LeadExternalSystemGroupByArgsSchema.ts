import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadExternalSystemWhereInputSchema } from '../inputTypeSchemas/LeadExternalSystemWhereInputSchema'
import { LeadExternalSystemOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadExternalSystemOrderByWithAggregationInputSchema'
import { LeadExternalSystemScalarFieldEnumSchema } from '../inputTypeSchemas/LeadExternalSystemScalarFieldEnumSchema'
import { LeadExternalSystemScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadExternalSystemScalarWhereWithAggregatesInputSchema'

export const LeadExternalSystemGroupByArgsSchema: z.ZodType<Prisma.LeadExternalSystemGroupByArgs> = z.object({
  where: LeadExternalSystemWhereInputSchema.optional(),
  orderBy: z.union([ LeadExternalSystemOrderByWithAggregationInputSchema.array(),LeadExternalSystemOrderByWithAggregationInputSchema ]).optional(),
  by: LeadExternalSystemScalarFieldEnumSchema.array(),
  having: LeadExternalSystemScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadExternalSystemGroupByArgsSchema;
