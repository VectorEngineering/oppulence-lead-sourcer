import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadProductFitAssessmentIncludeSchema } from '../inputTypeSchemas/LeadProductFitAssessmentIncludeSchema'
import { LeadProductFitAssessmentWhereInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentWhereInputSchema'
import { LeadProductFitAssessmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentOrderByWithRelationInputSchema'
import { LeadProductFitAssessmentWhereUniqueInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentWhereUniqueInputSchema'
import { LeadProductFitAssessmentScalarFieldEnumSchema } from '../inputTypeSchemas/LeadProductFitAssessmentScalarFieldEnumSchema'
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

export const LeadProductFitAssessmentFindFirstArgsSchema: z.ZodType<Prisma.LeadProductFitAssessmentFindFirstArgs> = z.object({
  select: LeadProductFitAssessmentSelectSchema.optional(),
  include: LeadProductFitAssessmentIncludeSchema.optional(),
  where: LeadProductFitAssessmentWhereInputSchema.optional(),
  orderBy: z.union([ LeadProductFitAssessmentOrderByWithRelationInputSchema.array(),LeadProductFitAssessmentOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadProductFitAssessmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadProductFitAssessmentScalarFieldEnumSchema,LeadProductFitAssessmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadProductFitAssessmentFindFirstArgsSchema;
