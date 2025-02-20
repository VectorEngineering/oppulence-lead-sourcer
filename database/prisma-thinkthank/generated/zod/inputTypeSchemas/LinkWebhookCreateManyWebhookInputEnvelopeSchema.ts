import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWebhookCreateManyWebhookInputSchema } from './LinkWebhookCreateManyWebhookInputSchema';

export const LinkWebhookCreateManyWebhookInputEnvelopeSchema: z.ZodType<Prisma.LinkWebhookCreateManyWebhookInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LinkWebhookCreateManyWebhookInputSchema),z.lazy(() => LinkWebhookCreateManyWebhookInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LinkWebhookCreateManyWebhookInputEnvelopeSchema;
