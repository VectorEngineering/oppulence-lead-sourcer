import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutLeadFeedbackInputSchema } from './LeadCreateWithoutLeadFeedbackInputSchema';
import { LeadUncheckedCreateWithoutLeadFeedbackInputSchema } from './LeadUncheckedCreateWithoutLeadFeedbackInputSchema';

export const LeadCreateOrConnectWithoutLeadFeedbackInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutLeadFeedbackInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadFeedbackInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadFeedbackInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutLeadFeedbackInputSchema;
