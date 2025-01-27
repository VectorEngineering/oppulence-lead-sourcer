import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionEnrichmentCreateManyProjectInputSchema } from './TransactionEnrichmentCreateManyProjectInputSchema';

export const TransactionEnrichmentCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.TransactionEnrichmentCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TransactionEnrichmentCreateManyProjectInputSchema),z.lazy(() => TransactionEnrichmentCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TransactionEnrichmentCreateManyProjectInputEnvelopeSchema;
