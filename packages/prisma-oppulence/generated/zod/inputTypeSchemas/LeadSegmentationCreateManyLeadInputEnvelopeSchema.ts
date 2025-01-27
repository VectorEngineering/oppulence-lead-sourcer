import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSegmentationCreateManyLeadInputSchema } from './LeadSegmentationCreateManyLeadInputSchema';

export const LeadSegmentationCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadSegmentationCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadSegmentationCreateManyLeadInputSchema),z.lazy(() => LeadSegmentationCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadSegmentationCreateManyLeadInputEnvelopeSchema;
