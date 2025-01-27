import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCommentCreateManyLeadInputSchema } from './LeadCommentCreateManyLeadInputSchema';

export const LeadCommentCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadCommentCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadCommentCreateManyLeadInputSchema),z.lazy(() => LeadCommentCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadCommentCreateManyLeadInputEnvelopeSchema;
