import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema';
import { WebhookCreateWithoutLogsInputSchema } from './WebhookCreateWithoutLogsInputSchema';
import { WebhookUncheckedCreateWithoutLogsInputSchema } from './WebhookUncheckedCreateWithoutLogsInputSchema';

export const WebhookCreateOrConnectWithoutLogsInputSchema: z.ZodType<Prisma.WebhookCreateOrConnectWithoutLogsInput> = z.object({
  where: z.lazy(() => WebhookWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WebhookCreateWithoutLogsInputSchema),z.lazy(() => WebhookUncheckedCreateWithoutLogsInputSchema) ]),
}).strict();

export default WebhookCreateOrConnectWithoutLogsInputSchema;
