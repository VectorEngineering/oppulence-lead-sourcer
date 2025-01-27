import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadProductFitAssessmentWhereUniqueInputSchema } from './LeadProductFitAssessmentWhereUniqueInputSchema';
import { LeadProductFitAssessmentCreateWithoutProductFitInputSchema } from './LeadProductFitAssessmentCreateWithoutProductFitInputSchema';
import { LeadProductFitAssessmentUncheckedCreateWithoutProductFitInputSchema } from './LeadProductFitAssessmentUncheckedCreateWithoutProductFitInputSchema';

export const LeadProductFitAssessmentCreateOrConnectWithoutProductFitInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentCreateOrConnectWithoutProductFitInput> = z.object({
  where: z.lazy(() => LeadProductFitAssessmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadProductFitAssessmentCreateWithoutProductFitInputSchema),z.lazy(() => LeadProductFitAssessmentUncheckedCreateWithoutProductFitInputSchema) ]),
}).strict();

export default LeadProductFitAssessmentCreateOrConnectWithoutProductFitInputSchema;
