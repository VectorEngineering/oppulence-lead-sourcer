import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadProductFitAssessmentWhereUniqueInputSchema } from './LeadProductFitAssessmentWhereUniqueInputSchema';
import { LeadProductFitAssessmentUpdateWithoutProductFitInputSchema } from './LeadProductFitAssessmentUpdateWithoutProductFitInputSchema';
import { LeadProductFitAssessmentUncheckedUpdateWithoutProductFitInputSchema } from './LeadProductFitAssessmentUncheckedUpdateWithoutProductFitInputSchema';

export const LeadProductFitAssessmentUpdateWithWhereUniqueWithoutProductFitInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentUpdateWithWhereUniqueWithoutProductFitInput> = z.object({
  where: z.lazy(() => LeadProductFitAssessmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadProductFitAssessmentUpdateWithoutProductFitInputSchema),z.lazy(() => LeadProductFitAssessmentUncheckedUpdateWithoutProductFitInputSchema) ]),
}).strict();

export default LeadProductFitAssessmentUpdateWithWhereUniqueWithoutProductFitInputSchema;
