import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const LinkWebhookUncheckedUpdateManyWithoutLinkInputSchema: z.ZodType<Prisma.LinkWebhookUncheckedUpdateManyWithoutLinkInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  webhookId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default LinkWebhookUncheckedUpdateManyWithoutLinkInputSchema;
