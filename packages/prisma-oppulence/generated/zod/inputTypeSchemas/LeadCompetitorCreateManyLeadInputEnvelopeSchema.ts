import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitorCreateManyLeadInputSchema } from './LeadCompetitorCreateManyLeadInputSchema';

export const LeadCompetitorCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadCompetitorCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadCompetitorCreateManyLeadInputSchema),z.lazy(() => LeadCompetitorCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadCompetitorCreateManyLeadInputEnvelopeSchema;
