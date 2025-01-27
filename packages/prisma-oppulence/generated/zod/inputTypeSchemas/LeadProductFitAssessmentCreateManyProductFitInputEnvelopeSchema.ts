import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadProductFitAssessmentCreateManyProductFitInputSchema } from './LeadProductFitAssessmentCreateManyProductFitInputSchema';

export const LeadProductFitAssessmentCreateManyProductFitInputEnvelopeSchema: z.ZodType<Prisma.LeadProductFitAssessmentCreateManyProductFitInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadProductFitAssessmentCreateManyProductFitInputSchema),z.lazy(() => LeadProductFitAssessmentCreateManyProductFitInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadProductFitAssessmentCreateManyProductFitInputEnvelopeSchema;
