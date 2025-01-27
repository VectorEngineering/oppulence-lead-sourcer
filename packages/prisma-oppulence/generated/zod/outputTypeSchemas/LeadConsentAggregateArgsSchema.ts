import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadConsentWhereInputSchema } from '../inputTypeSchemas/LeadConsentWhereInputSchema'
import { LeadConsentOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadConsentOrderByWithRelationInputSchema'
import { LeadConsentWhereUniqueInputSchema } from '../inputTypeSchemas/LeadConsentWhereUniqueInputSchema'

export const LeadConsentAggregateArgsSchema: z.ZodType<Prisma.LeadConsentAggregateArgs> = z.object({
  where: LeadConsentWhereInputSchema.optional(),
  orderBy: z.union([ LeadConsentOrderByWithRelationInputSchema.array(),LeadConsentOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadConsentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadConsentAggregateArgsSchema;
