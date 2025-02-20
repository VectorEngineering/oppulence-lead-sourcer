import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateNestedOneWithoutWebhooksInputSchema } from './LinkCreateNestedOneWithoutWebhooksInputSchema';
import { WebhookCreateNestedOneWithoutLinksInputSchema } from './WebhookCreateNestedOneWithoutLinksInputSchema';

export const LinkWebhookCreateInputSchema: z.ZodType<Prisma.LinkWebhookCreateInput> = z.object({
  id: z.string().cuid().optional(),
  link: z.lazy(() => LinkCreateNestedOneWithoutWebhooksInputSchema),
  webhook: z.lazy(() => WebhookCreateNestedOneWithoutLinksInputSchema)
}).strict();

export default LinkWebhookCreateInputSchema;
