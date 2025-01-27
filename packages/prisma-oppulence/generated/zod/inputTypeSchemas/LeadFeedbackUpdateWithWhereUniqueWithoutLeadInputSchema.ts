import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadFeedbackWhereUniqueInputSchema } from './LeadFeedbackWhereUniqueInputSchema';
import { LeadFeedbackUpdateWithoutLeadInputSchema } from './LeadFeedbackUpdateWithoutLeadInputSchema';
import { LeadFeedbackUncheckedUpdateWithoutLeadInputSchema } from './LeadFeedbackUncheckedUpdateWithoutLeadInputSchema';

export const LeadFeedbackUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadFeedbackUpdateWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadFeedbackWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadFeedbackUpdateWithoutLeadInputSchema),z.lazy(() => LeadFeedbackUncheckedUpdateWithoutLeadInputSchema) ]),
}).strict();

export default LeadFeedbackUpdateWithWhereUniqueWithoutLeadInputSchema;
