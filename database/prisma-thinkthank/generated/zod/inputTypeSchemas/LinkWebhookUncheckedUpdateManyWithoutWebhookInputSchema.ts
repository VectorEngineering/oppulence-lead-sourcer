import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const LinkWebhookUncheckedUpdateManyWithoutWebhookInputSchema: z.ZodType<Prisma.LinkWebhookUncheckedUpdateManyWithoutWebhookInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  linkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default LinkWebhookUncheckedUpdateManyWithoutWebhookInputSchema;
