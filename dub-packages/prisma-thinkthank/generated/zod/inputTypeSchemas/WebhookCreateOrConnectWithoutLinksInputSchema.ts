import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema';
import { WebhookCreateWithoutLinksInputSchema } from './WebhookCreateWithoutLinksInputSchema';
import { WebhookUncheckedCreateWithoutLinksInputSchema } from './WebhookUncheckedCreateWithoutLinksInputSchema';

export const WebhookCreateOrConnectWithoutLinksInputSchema: z.ZodType<Prisma.WebhookCreateOrConnectWithoutLinksInput> = z.object({
  where: z.lazy(() => WebhookWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WebhookCreateWithoutLinksInputSchema),z.lazy(() => WebhookUncheckedCreateWithoutLinksInputSchema) ]),
}).strict();

export default WebhookCreateOrConnectWithoutLinksInputSchema;
