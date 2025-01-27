import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookCreateManyProjectInputSchema } from './WebhookCreateManyProjectInputSchema';

export const WebhookCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.WebhookCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WebhookCreateManyProjectInputSchema),z.lazy(() => WebhookCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WebhookCreateManyProjectInputEnvelopeSchema;
