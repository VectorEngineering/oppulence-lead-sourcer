import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSocialProfileCreateManyLeadInputSchema } from './LeadSocialProfileCreateManyLeadInputSchema';

export const LeadSocialProfileCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadSocialProfileCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadSocialProfileCreateManyLeadInputSchema),z.lazy(() => LeadSocialProfileCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadSocialProfileCreateManyLeadInputEnvelopeSchema;
