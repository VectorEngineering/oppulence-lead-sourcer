import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadNurturingCreateManyLeadInputSchema } from './LeadNurturingCreateManyLeadInputSchema';

export const LeadNurturingCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadNurturingCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadNurturingCreateManyLeadInputSchema),z.lazy(() => LeadNurturingCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadNurturingCreateManyLeadInputEnvelopeSchema;
