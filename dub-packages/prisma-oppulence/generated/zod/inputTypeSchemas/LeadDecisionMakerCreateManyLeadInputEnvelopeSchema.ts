import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadDecisionMakerCreateManyLeadInputSchema } from './LeadDecisionMakerCreateManyLeadInputSchema';

export const LeadDecisionMakerCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadDecisionMakerCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadDecisionMakerCreateManyLeadInputSchema),z.lazy(() => LeadDecisionMakerCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadDecisionMakerCreateManyLeadInputEnvelopeSchema;
