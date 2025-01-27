import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadProductFitAssessmentSelectSchema } from '../inputTypeSchemas/LeadProductFitAssessmentSelectSchema';
import { LeadProductFitAssessmentIncludeSchema } from '../inputTypeSchemas/LeadProductFitAssessmentIncludeSchema';

export const LeadProductFitAssessmentArgsSchema: z.ZodType<Prisma.LeadProductFitAssessmentDefaultArgs> = z.object({
  select: z.lazy(() => LeadProductFitAssessmentSelectSchema).optional(),
  include: z.lazy(() => LeadProductFitAssessmentIncludeSchema).optional(),
}).strict();

export default LeadProductFitAssessmentArgsSchema;
