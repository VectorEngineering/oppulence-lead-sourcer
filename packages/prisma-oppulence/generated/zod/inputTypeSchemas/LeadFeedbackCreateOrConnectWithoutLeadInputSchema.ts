import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadFeedbackWhereUniqueInputSchema } from './LeadFeedbackWhereUniqueInputSchema';
import { LeadFeedbackCreateWithoutLeadInputSchema } from './LeadFeedbackCreateWithoutLeadInputSchema';
import { LeadFeedbackUncheckedCreateWithoutLeadInputSchema } from './LeadFeedbackUncheckedCreateWithoutLeadInputSchema';

export const LeadFeedbackCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadFeedbackCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadFeedbackWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadFeedbackCreateWithoutLeadInputSchema),z.lazy(() => LeadFeedbackUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadFeedbackCreateOrConnectWithoutLeadInputSchema;
