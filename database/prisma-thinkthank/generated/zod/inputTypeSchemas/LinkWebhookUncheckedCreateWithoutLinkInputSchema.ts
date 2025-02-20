import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LinkWebhookUncheckedCreateWithoutLinkInputSchema: z.ZodType<Prisma.LinkWebhookUncheckedCreateWithoutLinkInput> = z.object({
  id: z.string().cuid().optional(),
  webhookId: z.string()
}).strict();

export default LinkWebhookUncheckedCreateWithoutLinkInputSchema;
