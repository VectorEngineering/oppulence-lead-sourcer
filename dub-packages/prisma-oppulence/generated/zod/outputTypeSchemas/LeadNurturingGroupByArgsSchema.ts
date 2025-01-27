import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadNurturingWhereInputSchema } from '../inputTypeSchemas/LeadNurturingWhereInputSchema'
import { LeadNurturingOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadNurturingOrderByWithAggregationInputSchema'
import { LeadNurturingScalarFieldEnumSchema } from '../inputTypeSchemas/LeadNurturingScalarFieldEnumSchema'
import { LeadNurturingScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadNurturingScalarWhereWithAggregatesInputSchema'

export const LeadNurturingGroupByArgsSchema: z.ZodType<Prisma.LeadNurturingGroupByArgs> = z.object({
  where: LeadNurturingWhereInputSchema.optional(),
  orderBy: z.union([ LeadNurturingOrderByWithAggregationInputSchema.array(),LeadNurturingOrderByWithAggregationInputSchema ]).optional(),
  by: LeadNurturingScalarFieldEnumSchema.array(),
  having: LeadNurturingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadNurturingGroupByArgsSchema;
