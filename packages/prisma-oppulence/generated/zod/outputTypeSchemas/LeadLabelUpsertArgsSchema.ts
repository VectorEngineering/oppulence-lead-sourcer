import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadLabelIncludeSchema } from '../inputTypeSchemas/LeadLabelIncludeSchema'
import { LeadLabelWhereUniqueInputSchema } from '../inputTypeSchemas/LeadLabelWhereUniqueInputSchema'
import { LeadLabelCreateInputSchema } from '../inputTypeSchemas/LeadLabelCreateInputSchema'
import { LeadLabelUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadLabelUncheckedCreateInputSchema'
import { LeadLabelUpdateInputSchema } from '../inputTypeSchemas/LeadLabelUpdateInputSchema'
import { LeadLabelUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadLabelUncheckedUpdateInputSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadLabelSelectSchema: z.ZodType<Prisma.LeadLabelSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  name: z.boolean().optional(),
  color: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadLabelUpsertArgsSchema: z.ZodType<Prisma.LeadLabelUpsertArgs> = z.object({
  select: LeadLabelSelectSchema.optional(),
  include: LeadLabelIncludeSchema.optional(),
  where: LeadLabelWhereUniqueInputSchema,
  create: z.union([ LeadLabelCreateInputSchema,LeadLabelUncheckedCreateInputSchema ]),
  update: z.union([ LeadLabelUpdateInputSchema,LeadLabelUncheckedUpdateInputSchema ]),
}).strict() ;

export default LeadLabelUpsertArgsSchema;
