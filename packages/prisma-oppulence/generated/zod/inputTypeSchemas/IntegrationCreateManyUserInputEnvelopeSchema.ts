import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationCreateManyUserInputSchema } from './IntegrationCreateManyUserInputSchema';

export const IntegrationCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.IntegrationCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => IntegrationCreateManyUserInputSchema),z.lazy(() => IntegrationCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default IntegrationCreateManyUserInputEnvelopeSchema;
