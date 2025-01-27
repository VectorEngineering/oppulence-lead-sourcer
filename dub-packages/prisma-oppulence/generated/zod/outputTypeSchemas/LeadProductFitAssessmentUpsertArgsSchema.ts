import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadProductFitAssessmentIncludeSchema } from '../inputTypeSchemas/LeadProductFitAssessmentIncludeSchema'
import { LeadProductFitAssessmentWhereUniqueInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentWhereUniqueInputSchema'
import { LeadProductFitAssessmentCreateInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentCreateInputSchema'
import { LeadProductFitAssessmentUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentUncheckedCreateInputSchema'
import { LeadProductFitAssessmentUpdateInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentUpdateInputSchema'
import { LeadProductFitAssessmentUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentUncheckedUpdateInputSchema'
import { LeadProductFitArgsSchema } from "../outputTypeSchemas/LeadProductFitArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadProductFitAssessmentSelectSchema: z.ZodType<Prisma.LeadProductFitAssessmentSelect> = z.object({
  id: z.boolean().optional(),
  productFitId: z.boolean().optional(),
  assessor: z.boolean().optional(),
  scores: z.boolean().optional(),
  notes: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  productFit: z.union([z.boolean(),z.lazy(() => LeadProductFitArgsSchema)]).optional(),
}).strict()

export const LeadProductFitAssessmentUpsertArgsSchema: z.ZodType<Prisma.LeadProductFitAssessmentUpsertArgs> = z.object({
  select: LeadProductFitAssessmentSelectSchema.optional(),
  include: LeadProductFitAssessmentIncludeSchema.optional(),
  where: LeadProductFitAssessmentWhereUniqueInputSchema,
  create: z.union([ LeadProductFitAssessmentCreateInputSchema,LeadProductFitAssessmentUncheckedCreateInputSchema ]),
  update: z.union([ LeadProductFitAssessmentUpdateInputSchema,LeadProductFitAssessmentUncheckedUpdateInputSchema ]),
}).strict() ;

export default LeadProductFitAssessmentUpsertArgsSchema;
