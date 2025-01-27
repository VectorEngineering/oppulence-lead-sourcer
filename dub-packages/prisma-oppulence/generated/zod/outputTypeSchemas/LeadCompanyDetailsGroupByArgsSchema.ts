import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompanyDetailsWhereInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsWhereInputSchema'
import { LeadCompanyDetailsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsOrderByWithAggregationInputSchema'
import { LeadCompanyDetailsScalarFieldEnumSchema } from '../inputTypeSchemas/LeadCompanyDetailsScalarFieldEnumSchema'
import { LeadCompanyDetailsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsScalarWhereWithAggregatesInputSchema'

export const LeadCompanyDetailsGroupByArgsSchema: z.ZodType<Prisma.LeadCompanyDetailsGroupByArgs> = z.object({
  where: LeadCompanyDetailsWhereInputSchema.optional(),
  orderBy: z.union([ LeadCompanyDetailsOrderByWithAggregationInputSchema.array(),LeadCompanyDetailsOrderByWithAggregationInputSchema ]).optional(),
  by: LeadCompanyDetailsScalarFieldEnumSchema.array(),
  having: LeadCompanyDetailsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadCompanyDetailsGroupByArgsSchema;
