import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadExternalSystemCreateManyLeadInputSchema } from './LeadExternalSystemCreateManyLeadInputSchema';

export const LeadExternalSystemCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadExternalSystemCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadExternalSystemCreateManyLeadInputSchema),z.lazy(() => LeadExternalSystemCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadExternalSystemCreateManyLeadInputEnvelopeSchema;
