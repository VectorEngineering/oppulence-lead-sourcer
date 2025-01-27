import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadFeedbackWhereUniqueInputSchema } from './LeadFeedbackWhereUniqueInputSchema';
import { LeadFeedbackUpdateWithoutLeadInputSchema } from './LeadFeedbackUpdateWithoutLeadInputSchema';
import { LeadFeedbackUncheckedUpdateWithoutLeadInputSchema } from './LeadFeedbackUncheckedUpdateWithoutLeadInputSchema';
import { LeadFeedbackCreateWithoutLeadInputSchema } from './LeadFeedbackCreateWithoutLeadInputSchema';
import { LeadFeedbackUncheckedCreateWithoutLeadInputSchema } from './LeadFeedbackUncheckedCreateWithoutLeadInputSchema';

export const LeadFeedbackUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadFeedbackUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadFeedbackWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadFeedbackUpdateWithoutLeadInputSchema),z.lazy(() => LeadFeedbackUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadFeedbackCreateWithoutLeadInputSchema),z.lazy(() => LeadFeedbackUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadFeedbackUpsertWithWhereUniqueWithoutLeadInputSchema;
