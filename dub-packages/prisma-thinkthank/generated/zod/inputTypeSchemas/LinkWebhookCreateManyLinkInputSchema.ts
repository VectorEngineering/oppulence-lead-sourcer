import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LinkWebhookCreateManyLinkInputSchema: z.ZodType<Prisma.LinkWebhookCreateManyLinkInput> = z.object({
  id: z.string().cuid().optional(),
  webhookId: z.string()
}).strict();

export default LinkWebhookCreateManyLinkInputSchema;
