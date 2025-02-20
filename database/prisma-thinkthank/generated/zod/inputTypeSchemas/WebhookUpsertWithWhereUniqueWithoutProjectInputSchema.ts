import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema';
import { WebhookUpdateWithoutProjectInputSchema } from './WebhookUpdateWithoutProjectInputSchema';
import { WebhookUncheckedUpdateWithoutProjectInputSchema } from './WebhookUncheckedUpdateWithoutProjectInputSchema';
import { WebhookCreateWithoutProjectInputSchema } from './WebhookCreateWithoutProjectInputSchema';
import { WebhookUncheckedCreateWithoutProjectInputSchema } from './WebhookUncheckedCreateWithoutProjectInputSchema';

export const WebhookUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.WebhookUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => WebhookWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WebhookUpdateWithoutProjectInputSchema),z.lazy(() => WebhookUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => WebhookCreateWithoutProjectInputSchema),z.lazy(() => WebhookUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default WebhookUpsertWithWhereUniqueWithoutProjectInputSchema;
