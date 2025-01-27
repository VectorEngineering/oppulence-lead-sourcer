import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCommunicationIncludeSchema } from '../inputTypeSchemas/LeadCommunicationIncludeSchema'
import { LeadCommunicationWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCommunicationWhereUniqueInputSchema'
import { LeadCommunicationCreateInputSchema } from '../inputTypeSchemas/LeadCommunicationCreateInputSchema'
import { LeadCommunicationUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadCommunicationUncheckedCreateInputSchema'
import { LeadCommunicationUpdateInputSchema } from '../inputTypeSchemas/LeadCommunicationUpdateInputSchema'
import { LeadCommunicationUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadCommunicationUncheckedUpdateInputSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadCommunicationSelectSchema: z.ZodType<Prisma.LeadCommunicationSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  type: z.boolean().optional(),
  direction: z.boolean().optional(),
  subject: z.boolean().optional(),
  content: z.boolean().optional(),
  outcome: z.boolean().optional(),
  duration: z.boolean().optional(),
  scheduledAt: z.boolean().optional(),
  completedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadCommunicationUpsertArgsSchema: z.ZodType<Prisma.LeadCommunicationUpsertArgs> = z.object({
  select: LeadCommunicationSelectSchema.optional(),
  include: LeadCommunicationIncludeSchema.optional(),
  where: LeadCommunicationWhereUniqueInputSchema,
  create: z.union([ LeadCommunicationCreateInputSchema,LeadCommunicationUncheckedCreateInputSchema ]),
  update: z.union([ LeadCommunicationUpdateInputSchema,LeadCommunicationUncheckedUpdateInputSchema ]),
}).strict() ;

export default LeadCommunicationUpsertArgsSchema;
