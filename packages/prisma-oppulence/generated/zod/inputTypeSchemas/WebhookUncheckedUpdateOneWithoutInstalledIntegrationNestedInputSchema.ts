import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookCreateWithoutInstalledIntegrationInputSchema } from './WebhookCreateWithoutInstalledIntegrationInputSchema';
import { WebhookUncheckedCreateWithoutInstalledIntegrationInputSchema } from './WebhookUncheckedCreateWithoutInstalledIntegrationInputSchema';
import { WebhookCreateOrConnectWithoutInstalledIntegrationInputSchema } from './WebhookCreateOrConnectWithoutInstalledIntegrationInputSchema';
import { WebhookUpsertWithoutInstalledIntegrationInputSchema } from './WebhookUpsertWithoutInstalledIntegrationInputSchema';
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema';
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema';
import { WebhookUpdateToOneWithWhereWithoutInstalledIntegrationInputSchema } from './WebhookUpdateToOneWithWhereWithoutInstalledIntegrationInputSchema';
import { WebhookUpdateWithoutInstalledIntegrationInputSchema } from './WebhookUpdateWithoutInstalledIntegrationInputSchema';
import { WebhookUncheckedUpdateWithoutInstalledIntegrationInputSchema } from './WebhookUncheckedUpdateWithoutInstalledIntegrationInputSchema';

export const WebhookUncheckedUpdateOneWithoutInstalledIntegrationNestedInputSchema: z.ZodType<Prisma.WebhookUncheckedUpdateOneWithoutInstalledIntegrationNestedInput> = z.object({
  create: z.union([ z.lazy(() => WebhookCreateWithoutInstalledIntegrationInputSchema),z.lazy(() => WebhookUncheckedCreateWithoutInstalledIntegrationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WebhookCreateOrConnectWithoutInstalledIntegrationInputSchema).optional(),
  upsert: z.lazy(() => WebhookUpsertWithoutInstalledIntegrationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => WebhookWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => WebhookWhereInputSchema) ]).optional(),
  connect: z.lazy(() => WebhookWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WebhookUpdateToOneWithWhereWithoutInstalledIntegrationInputSchema),z.lazy(() => WebhookUpdateWithoutInstalledIntegrationInputSchema),z.lazy(() => WebhookUncheckedUpdateWithoutInstalledIntegrationInputSchema) ]).optional(),
}).strict();

export default WebhookUncheckedUpdateOneWithoutInstalledIntegrationNestedInputSchema;
