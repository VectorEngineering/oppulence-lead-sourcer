import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreCreateManyLeadInputSchema } from './LeadScoreCreateManyLeadInputSchema';

export const LeadScoreCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadScoreCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadScoreCreateManyLeadInputSchema),z.lazy(() => LeadScoreCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadScoreCreateManyLeadInputEnvelopeSchema;
