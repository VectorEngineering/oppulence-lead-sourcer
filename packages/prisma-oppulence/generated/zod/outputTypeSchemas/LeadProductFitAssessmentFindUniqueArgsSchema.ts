import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadProductFitAssessmentIncludeSchema } from '../inputTypeSchemas/LeadProductFitAssessmentIncludeSchema'
import { LeadProductFitAssessmentWhereUniqueInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentWhereUniqueInputSchema'
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

export const LeadProductFitAssessmentFindUniqueArgsSchema: z.ZodType<Prisma.LeadProductFitAssessmentFindUniqueArgs> = z.object({
  select: LeadProductFitAssessmentSelectSchema.optional(),
  include: LeadProductFitAssessmentIncludeSchema.optional(),
  where: LeadProductFitAssessmentWhereUniqueInputSchema,
}).strict() ;

export default LeadProductFitAssessmentFindUniqueArgsSchema;
