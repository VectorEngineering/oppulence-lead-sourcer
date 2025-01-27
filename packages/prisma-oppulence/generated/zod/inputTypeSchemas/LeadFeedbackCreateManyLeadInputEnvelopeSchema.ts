import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadFeedbackCreateManyLeadInputSchema } from './LeadFeedbackCreateManyLeadInputSchema';

export const LeadFeedbackCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadFeedbackCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadFeedbackCreateManyLeadInputSchema),z.lazy(() => LeadFeedbackCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadFeedbackCreateManyLeadInputEnvelopeSchema;
