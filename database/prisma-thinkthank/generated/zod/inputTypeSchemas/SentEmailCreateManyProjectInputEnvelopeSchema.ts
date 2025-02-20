import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SentEmailCreateManyProjectInputSchema } from './SentEmailCreateManyProjectInputSchema';

export const SentEmailCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.SentEmailCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SentEmailCreateManyProjectInputSchema),z.lazy(() => SentEmailCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SentEmailCreateManyProjectInputEnvelopeSchema;
