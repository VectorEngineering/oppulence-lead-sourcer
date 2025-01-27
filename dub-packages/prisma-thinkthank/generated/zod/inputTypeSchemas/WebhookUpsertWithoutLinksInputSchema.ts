import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookUpdateWithoutLinksInputSchema } from './WebhookUpdateWithoutLinksInputSchema';
import { WebhookUncheckedUpdateWithoutLinksInputSchema } from './WebhookUncheckedUpdateWithoutLinksInputSchema';
import { WebhookCreateWithoutLinksInputSchema } from './WebhookCreateWithoutLinksInputSchema';
import { WebhookUncheckedCreateWithoutLinksInputSchema } from './WebhookUncheckedCreateWithoutLinksInputSchema';
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema';

export const WebhookUpsertWithoutLinksInputSchema: z.ZodType<Prisma.WebhookUpsertWithoutLinksInput> = z.object({
  update: z.union([ z.lazy(() => WebhookUpdateWithoutLinksInputSchema),z.lazy(() => WebhookUncheckedUpdateWithoutLinksInputSchema) ]),
  create: z.union([ z.lazy(() => WebhookCreateWithoutLinksInputSchema),z.lazy(() => WebhookUncheckedCreateWithoutLinksInputSchema) ]),
  where: z.lazy(() => WebhookWhereInputSchema).optional()
}).strict();

export default WebhookUpsertWithoutLinksInputSchema;
