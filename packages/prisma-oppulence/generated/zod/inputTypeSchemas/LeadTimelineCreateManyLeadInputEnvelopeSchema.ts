import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTimelineCreateManyLeadInputSchema } from './LeadTimelineCreateManyLeadInputSchema';

export const LeadTimelineCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadTimelineCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadTimelineCreateManyLeadInputSchema),z.lazy(() => LeadTimelineCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadTimelineCreateManyLeadInputEnvelopeSchema;
