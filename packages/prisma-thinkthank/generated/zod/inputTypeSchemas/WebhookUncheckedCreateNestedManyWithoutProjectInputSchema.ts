import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookCreateWithoutProjectInputSchema } from './WebhookCreateWithoutProjectInputSchema';
import { WebhookUncheckedCreateWithoutProjectInputSchema } from './WebhookUncheckedCreateWithoutProjectInputSchema';
import { WebhookCreateOrConnectWithoutProjectInputSchema } from './WebhookCreateOrConnectWithoutProjectInputSchema';
import { WebhookCreateManyProjectInputEnvelopeSchema } from './WebhookCreateManyProjectInputEnvelopeSchema';
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema';

export const WebhookUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.WebhookUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => WebhookCreateWithoutProjectInputSchema),z.lazy(() => WebhookCreateWithoutProjectInputSchema).array(),z.lazy(() => WebhookUncheckedCreateWithoutProjectInputSchema),z.lazy(() => WebhookUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WebhookCreateOrConnectWithoutProjectInputSchema),z.lazy(() => WebhookCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WebhookCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WebhookWhereUniqueInputSchema),z.lazy(() => WebhookWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WebhookUncheckedCreateNestedManyWithoutProjectInputSchema;
