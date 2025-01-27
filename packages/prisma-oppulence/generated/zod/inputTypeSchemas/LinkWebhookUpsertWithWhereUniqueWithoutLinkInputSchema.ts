import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWebhookWhereUniqueInputSchema } from './LinkWebhookWhereUniqueInputSchema';
import { LinkWebhookUpdateWithoutLinkInputSchema } from './LinkWebhookUpdateWithoutLinkInputSchema';
import { LinkWebhookUncheckedUpdateWithoutLinkInputSchema } from './LinkWebhookUncheckedUpdateWithoutLinkInputSchema';
import { LinkWebhookCreateWithoutLinkInputSchema } from './LinkWebhookCreateWithoutLinkInputSchema';
import { LinkWebhookUncheckedCreateWithoutLinkInputSchema } from './LinkWebhookUncheckedCreateWithoutLinkInputSchema';

export const LinkWebhookUpsertWithWhereUniqueWithoutLinkInputSchema: z.ZodType<Prisma.LinkWebhookUpsertWithWhereUniqueWithoutLinkInput> = z.object({
  where: z.lazy(() => LinkWebhookWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LinkWebhookUpdateWithoutLinkInputSchema),z.lazy(() => LinkWebhookUncheckedUpdateWithoutLinkInputSchema) ]),
  create: z.union([ z.lazy(() => LinkWebhookCreateWithoutLinkInputSchema),z.lazy(() => LinkWebhookUncheckedCreateWithoutLinkInputSchema) ]),
}).strict();

export default LinkWebhookUpsertWithWhereUniqueWithoutLinkInputSchema;
