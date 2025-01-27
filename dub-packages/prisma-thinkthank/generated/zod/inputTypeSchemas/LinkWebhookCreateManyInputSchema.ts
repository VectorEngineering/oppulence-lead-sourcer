import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LinkWebhookCreateManyInputSchema: z.ZodType<Prisma.LinkWebhookCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  linkId: z.string(),
  webhookId: z.string()
}).strict();

export default LinkWebhookCreateManyInputSchema;
