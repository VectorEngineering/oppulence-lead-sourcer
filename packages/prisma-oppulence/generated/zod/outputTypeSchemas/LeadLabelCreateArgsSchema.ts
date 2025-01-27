import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadLabelIncludeSchema } from '../inputTypeSchemas/LeadLabelIncludeSchema'
import { LeadLabelCreateInputSchema } from '../inputTypeSchemas/LeadLabelCreateInputSchema'
import { LeadLabelUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadLabelUncheckedCreateInputSchema'
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

export const LeadLabelCreateArgsSchema: z.ZodType<Prisma.LeadLabelCreateArgs> = z.object({
  select: LeadLabelSelectSchema.optional(),
  include: LeadLabelIncludeSchema.optional(),
  data: z.union([ LeadLabelCreateInputSchema,LeadLabelUncheckedCreateInputSchema ]),
}).strict() ;

export default LeadLabelCreateArgsSchema;
