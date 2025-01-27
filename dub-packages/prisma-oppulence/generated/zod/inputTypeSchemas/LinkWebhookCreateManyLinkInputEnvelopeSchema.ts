import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWebhookCreateManyLinkInputSchema } from './LinkWebhookCreateManyLinkInputSchema';

export const LinkWebhookCreateManyLinkInputEnvelopeSchema: z.ZodType<Prisma.LinkWebhookCreateManyLinkInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LinkWebhookCreateManyLinkInputSchema),z.lazy(() => LinkWebhookCreateManyLinkInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LinkWebhookCreateManyLinkInputEnvelopeSchema;
