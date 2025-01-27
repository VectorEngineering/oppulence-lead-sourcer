import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreHistoryCreateManyLeadScoreInputSchema } from './LeadScoreHistoryCreateManyLeadScoreInputSchema';

export const LeadScoreHistoryCreateManyLeadScoreInputEnvelopeSchema: z.ZodType<Prisma.LeadScoreHistoryCreateManyLeadScoreInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadScoreHistoryCreateManyLeadScoreInputSchema),z.lazy(() => LeadScoreHistoryCreateManyLeadScoreInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadScoreHistoryCreateManyLeadScoreInputEnvelopeSchema;
