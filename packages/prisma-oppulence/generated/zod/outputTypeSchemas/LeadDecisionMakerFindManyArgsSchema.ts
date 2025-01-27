import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadDecisionMakerIncludeSchema } from '../inputTypeSchemas/LeadDecisionMakerIncludeSchema'
import { LeadDecisionMakerWhereInputSchema } from '../inputTypeSchemas/LeadDecisionMakerWhereInputSchema'
import { LeadDecisionMakerOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadDecisionMakerOrderByWithRelationInputSchema'
import { LeadDecisionMakerWhereUniqueInputSchema } from '../inputTypeSchemas/LeadDecisionMakerWhereUniqueInputSchema'
import { LeadDecisionMakerScalarFieldEnumSchema } from '../inputTypeSchemas/LeadDecisionMakerScalarFieldEnumSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadDecisionMakerSelectSchema: z.ZodType<Prisma.LeadDecisionMakerSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  name: z.boolean().optional(),
  title: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  influence: z.boolean().optional(),
  notes: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadDecisionMakerFindManyArgsSchema: z.ZodType<Prisma.LeadDecisionMakerFindManyArgs> = z.object({
  select: LeadDecisionMakerSelectSchema.optional(),
  include: LeadDecisionMakerIncludeSchema.optional(),
  where: LeadDecisionMakerWhereInputSchema.optional(),
  orderBy: z.union([ LeadDecisionMakerOrderByWithRelationInputSchema.array(),LeadDecisionMakerOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadDecisionMakerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadDecisionMakerScalarFieldEnumSchema,LeadDecisionMakerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadDecisionMakerFindManyArgsSchema;
