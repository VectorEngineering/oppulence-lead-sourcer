import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookUpdateWithoutLogsInputSchema } from './WebhookUpdateWithoutLogsInputSchema';
import { WebhookUncheckedUpdateWithoutLogsInputSchema } from './WebhookUncheckedUpdateWithoutLogsInputSchema';
import { WebhookCreateWithoutLogsInputSchema } from './WebhookCreateWithoutLogsInputSchema';
import { WebhookUncheckedCreateWithoutLogsInputSchema } from './WebhookUncheckedCreateWithoutLogsInputSchema';
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema';

export const WebhookUpsertWithoutLogsInputSchema: z.ZodType<Prisma.WebhookUpsertWithoutLogsInput> = z.object({
  update: z.union([ z.lazy(() => WebhookUpdateWithoutLogsInputSchema),z.lazy(() => WebhookUncheckedUpdateWithoutLogsInputSchema) ]),
  create: z.union([ z.lazy(() => WebhookCreateWithoutLogsInputSchema),z.lazy(() => WebhookUncheckedCreateWithoutLogsInputSchema) ]),
  where: z.lazy(() => WebhookWhereInputSchema).optional()
}).strict();

export default WebhookUpsertWithoutLogsInputSchema;
