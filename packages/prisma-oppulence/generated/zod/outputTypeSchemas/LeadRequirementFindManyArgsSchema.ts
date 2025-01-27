import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadRequirementIncludeSchema } from '../inputTypeSchemas/LeadRequirementIncludeSchema'
import { LeadRequirementWhereInputSchema } from '../inputTypeSchemas/LeadRequirementWhereInputSchema'
import { LeadRequirementOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadRequirementOrderByWithRelationInputSchema'
import { LeadRequirementWhereUniqueInputSchema } from '../inputTypeSchemas/LeadRequirementWhereUniqueInputSchema'
import { LeadRequirementScalarFieldEnumSchema } from '../inputTypeSchemas/LeadRequirementScalarFieldEnumSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadRequirementSelectSchema: z.ZodType<Prisma.LeadRequirementSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  category: z.boolean().optional(),
  priority: z.boolean().optional(),
  description: z.boolean().optional(),
  status: z.boolean().optional(),
  notes: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadRequirementFindManyArgsSchema: z.ZodType<Prisma.LeadRequirementFindManyArgs> = z.object({
  select: LeadRequirementSelectSchema.optional(),
  include: LeadRequirementIncludeSchema.optional(),
  where: LeadRequirementWhereInputSchema.optional(),
  orderBy: z.union([ LeadRequirementOrderByWithRelationInputSchema.array(),LeadRequirementOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadRequirementWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadRequirementScalarFieldEnumSchema,LeadRequirementScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadRequirementFindManyArgsSchema;
