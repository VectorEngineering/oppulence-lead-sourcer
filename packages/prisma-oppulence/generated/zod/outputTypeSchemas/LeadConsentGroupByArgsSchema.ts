import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadConsentWhereInputSchema } from '../inputTypeSchemas/LeadConsentWhereInputSchema'
import { LeadConsentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadConsentOrderByWithAggregationInputSchema'
import { LeadConsentScalarFieldEnumSchema } from '../inputTypeSchemas/LeadConsentScalarFieldEnumSchema'
import { LeadConsentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadConsentScalarWhereWithAggregatesInputSchema'

export const LeadConsentGroupByArgsSchema: z.ZodType<Prisma.LeadConsentGroupByArgs> = z.object({
  where: LeadConsentWhereInputSchema.optional(),
  orderBy: z.union([ LeadConsentOrderByWithAggregationInputSchema.array(),LeadConsentOrderByWithAggregationInputSchema ]).optional(),
  by: LeadConsentScalarFieldEnumSchema.array(),
  having: LeadConsentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadConsentGroupByArgsSchema;
