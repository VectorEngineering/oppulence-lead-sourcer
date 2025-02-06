import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationCreateManyProjectInputSchema } from './IntegrationCreateManyProjectInputSchema';

export const IntegrationCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.IntegrationCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => IntegrationCreateManyProjectInputSchema),z.lazy(() => IntegrationCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default IntegrationCreateManyProjectInputEnvelopeSchema;
