import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookLogWhereUniqueInputSchema } from './WebhookLogWhereUniqueInputSchema';
import { WebhookLogCreateWithoutWebhookInputSchema } from './WebhookLogCreateWithoutWebhookInputSchema';
import { WebhookLogUncheckedCreateWithoutWebhookInputSchema } from './WebhookLogUncheckedCreateWithoutWebhookInputSchema';

export const WebhookLogCreateOrConnectWithoutWebhookInputSchema: z.ZodType<Prisma.WebhookLogCreateOrConnectWithoutWebhookInput> = z.object({
  where: z.lazy(() => WebhookLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WebhookLogCreateWithoutWebhookInputSchema),z.lazy(() => WebhookLogUncheckedCreateWithoutWebhookInputSchema) ]),
}).strict();

export default WebhookLogCreateOrConnectWithoutWebhookInputSchema;
