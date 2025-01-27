import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadContactPreferenceIncludeSchema } from '../inputTypeSchemas/LeadContactPreferenceIncludeSchema'
import { LeadContactPreferenceWhereInputSchema } from '../inputTypeSchemas/LeadContactPreferenceWhereInputSchema'
import { LeadContactPreferenceOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadContactPreferenceOrderByWithRelationInputSchema'
import { LeadContactPreferenceWhereUniqueInputSchema } from '../inputTypeSchemas/LeadContactPreferenceWhereUniqueInputSchema'
import { LeadContactPreferenceScalarFieldEnumSchema } from '../inputTypeSchemas/LeadContactPreferenceScalarFieldEnumSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadContactPreferenceSelectSchema: z.ZodType<Prisma.LeadContactPreferenceSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  method: z.boolean().optional(),
  preferredTime: z.boolean().optional(),
  preferredDays: z.boolean().optional(),
  timezone: z.boolean().optional(),
  notes: z.boolean().optional(),
  isActive: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadContactPreferenceFindManyArgsSchema: z.ZodType<Prisma.LeadContactPreferenceFindManyArgs> = z.object({
  select: LeadContactPreferenceSelectSchema.optional(),
  include: LeadContactPreferenceIncludeSchema.optional(),
  where: LeadContactPreferenceWhereInputSchema.optional(),
  orderBy: z.union([ LeadContactPreferenceOrderByWithRelationInputSchema.array(),LeadContactPreferenceOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadContactPreferenceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadContactPreferenceScalarFieldEnumSchema,LeadContactPreferenceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadContactPreferenceFindManyArgsSchema;
