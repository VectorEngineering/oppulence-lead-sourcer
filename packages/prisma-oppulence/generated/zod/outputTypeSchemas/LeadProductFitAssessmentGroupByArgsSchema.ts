import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadProductFitAssessmentWhereInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentWhereInputSchema'
import { LeadProductFitAssessmentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentOrderByWithAggregationInputSchema'
import { LeadProductFitAssessmentScalarFieldEnumSchema } from '../inputTypeSchemas/LeadProductFitAssessmentScalarFieldEnumSchema'
import { LeadProductFitAssessmentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentScalarWhereWithAggregatesInputSchema'

export const LeadProductFitAssessmentGroupByArgsSchema: z.ZodType<Prisma.LeadProductFitAssessmentGroupByArgs> = z.object({
  where: LeadProductFitAssessmentWhereInputSchema.optional(),
  orderBy: z.union([ LeadProductFitAssessmentOrderByWithAggregationInputSchema.array(),LeadProductFitAssessmentOrderByWithAggregationInputSchema ]).optional(),
  by: LeadProductFitAssessmentScalarFieldEnumSchema.array(),
  having: LeadProductFitAssessmentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadProductFitAssessmentGroupByArgsSchema;
