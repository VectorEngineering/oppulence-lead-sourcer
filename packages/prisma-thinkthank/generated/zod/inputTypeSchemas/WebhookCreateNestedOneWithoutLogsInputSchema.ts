import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookCreateWithoutLogsInputSchema } from './WebhookCreateWithoutLogsInputSchema';
import { WebhookUncheckedCreateWithoutLogsInputSchema } from './WebhookUncheckedCreateWithoutLogsInputSchema';
import { WebhookCreateOrConnectWithoutLogsInputSchema } from './WebhookCreateOrConnectWithoutLogsInputSchema';
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema';

export const WebhookCreateNestedOneWithoutLogsInputSchema: z.ZodType<Prisma.WebhookCreateNestedOneWithoutLogsInput> = z.object({
  create: z.union([ z.lazy(() => WebhookCreateWithoutLogsInputSchema),z.lazy(() => WebhookUncheckedCreateWithoutLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WebhookCreateOrConnectWithoutLogsInputSchema).optional(),
  connect: z.lazy(() => WebhookWhereUniqueInputSchema).optional()
}).strict();

export default WebhookCreateNestedOneWithoutLogsInputSchema;
