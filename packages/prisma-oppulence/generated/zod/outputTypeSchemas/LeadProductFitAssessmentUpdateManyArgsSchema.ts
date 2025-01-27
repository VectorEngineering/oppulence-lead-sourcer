import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadProductFitAssessmentUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentUpdateManyMutationInputSchema'
import { LeadProductFitAssessmentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentUncheckedUpdateManyInputSchema'
import { LeadProductFitAssessmentWhereInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentWhereInputSchema'

export const LeadProductFitAssessmentUpdateManyArgsSchema: z.ZodType<Prisma.LeadProductFitAssessmentUpdateManyArgs> = z.object({
  data: z.union([ LeadProductFitAssessmentUpdateManyMutationInputSchema,LeadProductFitAssessmentUncheckedUpdateManyInputSchema ]),
  where: LeadProductFitAssessmentWhereInputSchema.optional(),
}).strict() ;

export default LeadProductFitAssessmentUpdateManyArgsSchema;
