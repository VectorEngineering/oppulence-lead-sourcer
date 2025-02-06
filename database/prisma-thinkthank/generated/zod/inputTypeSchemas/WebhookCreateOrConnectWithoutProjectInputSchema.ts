import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema';
import { WebhookCreateWithoutProjectInputSchema } from './WebhookCreateWithoutProjectInputSchema';
import { WebhookUncheckedCreateWithoutProjectInputSchema } from './WebhookUncheckedCreateWithoutProjectInputSchema';

export const WebhookCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.WebhookCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => WebhookWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WebhookCreateWithoutProjectInputSchema),z.lazy(() => WebhookUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default WebhookCreateOrConnectWithoutProjectInputSchema;
