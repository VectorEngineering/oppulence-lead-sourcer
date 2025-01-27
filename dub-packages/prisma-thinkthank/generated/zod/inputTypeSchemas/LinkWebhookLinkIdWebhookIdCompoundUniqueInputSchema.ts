import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LinkWebhookLinkIdWebhookIdCompoundUniqueInputSchema: z.ZodType<Prisma.LinkWebhookLinkIdWebhookIdCompoundUniqueInput> = z.object({
  linkId: z.string(),
  webhookId: z.string()
}).strict();

export default LinkWebhookLinkIdWebhookIdCompoundUniqueInputSchema;
