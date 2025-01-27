import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadRequirementIncludeSchema } from '../inputTypeSchemas/LeadRequirementIncludeSchema'
import { LeadRequirementWhereUniqueInputSchema } from '../inputTypeSchemas/LeadRequirementWhereUniqueInputSchema'
import { LeadRequirementCreateInputSchema } from '../inputTypeSchemas/LeadRequirementCreateInputSchema'
import { LeadRequirementUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadRequirementUncheckedCreateInputSchema'
import { LeadRequirementUpdateInputSchema } from '../inputTypeSchemas/LeadRequirementUpdateInputSchema'
import { LeadRequirementUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadRequirementUncheckedUpdateInputSchema'
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

export const LeadRequirementUpsertArgsSchema: z.ZodType<Prisma.LeadRequirementUpsertArgs> = z.object({
  select: LeadRequirementSelectSchema.optional(),
  include: LeadRequirementIncludeSchema.optional(),
  where: LeadRequirementWhereUniqueInputSchema,
  create: z.union([ LeadRequirementCreateInputSchema,LeadRequirementUncheckedCreateInputSchema ]),
  update: z.union([ LeadRequirementUpdateInputSchema,LeadRequirementUncheckedUpdateInputSchema ]),
}).strict() ;

export default LeadRequirementUpsertArgsSchema;
