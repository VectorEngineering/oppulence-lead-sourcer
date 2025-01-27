import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCommunicationCreateManyLeadInputSchema } from './LeadCommunicationCreateManyLeadInputSchema';

export const LeadCommunicationCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadCommunicationCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadCommunicationCreateManyLeadInputSchema),z.lazy(() => LeadCommunicationCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadCommunicationCreateManyLeadInputEnvelopeSchema;
