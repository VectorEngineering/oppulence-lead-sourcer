import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadMetadataCreateManyLeadInputSchema } from './LeadMetadataCreateManyLeadInputSchema';

export const LeadMetadataCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadMetadataCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadMetadataCreateManyLeadInputSchema),z.lazy(() => LeadMetadataCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadMetadataCreateManyLeadInputEnvelopeSchema;
