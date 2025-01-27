import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadProductFitAssessmentWhereUniqueInputSchema } from './LeadProductFitAssessmentWhereUniqueInputSchema';
import { LeadProductFitAssessmentUpdateWithoutProductFitInputSchema } from './LeadProductFitAssessmentUpdateWithoutProductFitInputSchema';
import { LeadProductFitAssessmentUncheckedUpdateWithoutProductFitInputSchema } from './LeadProductFitAssessmentUncheckedUpdateWithoutProductFitInputSchema';
import { LeadProductFitAssessmentCreateWithoutProductFitInputSchema } from './LeadProductFitAssessmentCreateWithoutProductFitInputSchema';
import { LeadProductFitAssessmentUncheckedCreateWithoutProductFitInputSchema } from './LeadProductFitAssessmentUncheckedCreateWithoutProductFitInputSchema';

export const LeadProductFitAssessmentUpsertWithWhereUniqueWithoutProductFitInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentUpsertWithWhereUniqueWithoutProductFitInput> = z.object({
  where: z.lazy(() => LeadProductFitAssessmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadProductFitAssessmentUpdateWithoutProductFitInputSchema),z.lazy(() => LeadProductFitAssessmentUncheckedUpdateWithoutProductFitInputSchema) ]),
  create: z.union([ z.lazy(() => LeadProductFitAssessmentCreateWithoutProductFitInputSchema),z.lazy(() => LeadProductFitAssessmentUncheckedCreateWithoutProductFitInputSchema) ]),
}).strict();

export default LeadProductFitAssessmentUpsertWithWhereUniqueWithoutProductFitInputSchema;
