import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LinkWebhookUncheckedCreateInputSchema: z.ZodType<Prisma.LinkWebhookUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  linkId: z.string(),
  webhookId: z.string()
}).strict();

export default LinkWebhookUncheckedCreateInputSchema;
