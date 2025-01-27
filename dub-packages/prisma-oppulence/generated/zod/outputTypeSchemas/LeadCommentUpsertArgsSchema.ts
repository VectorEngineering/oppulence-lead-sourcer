import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCommentIncludeSchema } from '../inputTypeSchemas/LeadCommentIncludeSchema'
import { LeadCommentWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCommentWhereUniqueInputSchema'
import { LeadCommentCreateInputSchema } from '../inputTypeSchemas/LeadCommentCreateInputSchema'
import { LeadCommentUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadCommentUncheckedCreateInputSchema'
import { LeadCommentUpdateInputSchema } from '../inputTypeSchemas/LeadCommentUpdateInputSchema'
import { LeadCommentUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadCommentUncheckedUpdateInputSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadCommentSelectSchema: z.ZodType<Prisma.LeadCommentSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  content: z.boolean().optional(),
  type: z.boolean().optional(),
  visibility: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadCommentUpsertArgsSchema: z.ZodType<Prisma.LeadCommentUpsertArgs> = z.object({
  select: LeadCommentSelectSchema.optional(),
  include: LeadCommentIncludeSchema.optional(),
  where: LeadCommentWhereUniqueInputSchema,
  create: z.union([ LeadCommentCreateInputSchema,LeadCommentUncheckedCreateInputSchema ]),
  update: z.union([ LeadCommentUpdateInputSchema,LeadCommentUncheckedUpdateInputSchema ]),
}).strict() ;

export default LeadCommentUpsertArgsSchema;
