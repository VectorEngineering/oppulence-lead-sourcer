import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { LinkUpdateOneRequiredWithoutWebhooksNestedInputSchema } from './LinkUpdateOneRequiredWithoutWebhooksNestedInputSchema';

export const LinkWebhookUpdateWithoutWebhookInputSchema: z.ZodType<Prisma.LinkWebhookUpdateWithoutWebhookInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.lazy(() => LinkUpdateOneRequiredWithoutWebhooksNestedInputSchema).optional()
}).strict();

export default LinkWebhookUpdateWithoutWebhookInputSchema;
