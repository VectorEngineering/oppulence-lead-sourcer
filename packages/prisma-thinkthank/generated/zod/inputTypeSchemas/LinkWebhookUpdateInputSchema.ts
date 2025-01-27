import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { LinkUpdateOneRequiredWithoutWebhooksNestedInputSchema } from './LinkUpdateOneRequiredWithoutWebhooksNestedInputSchema';
import { WebhookUpdateOneRequiredWithoutLinksNestedInputSchema } from './WebhookUpdateOneRequiredWithoutLinksNestedInputSchema';

export const LinkWebhookUpdateInputSchema: z.ZodType<Prisma.LinkWebhookUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.lazy(() => LinkUpdateOneRequiredWithoutWebhooksNestedInputSchema).optional(),
  webhook: z.lazy(() => WebhookUpdateOneRequiredWithoutLinksNestedInputSchema).optional()
}).strict();

export default LinkWebhookUpdateInputSchema;
