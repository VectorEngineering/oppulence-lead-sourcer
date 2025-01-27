import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadProductFitCreateManyLeadInputSchema } from './LeadProductFitCreateManyLeadInputSchema';

export const LeadProductFitCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadProductFitCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadProductFitCreateManyLeadInputSchema),z.lazy(() => LeadProductFitCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadProductFitCreateManyLeadInputEnvelopeSchema;
