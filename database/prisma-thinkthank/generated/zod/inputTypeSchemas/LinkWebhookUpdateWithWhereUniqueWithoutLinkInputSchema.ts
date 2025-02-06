import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWebhookWhereUniqueInputSchema } from './LinkWebhookWhereUniqueInputSchema';
import { LinkWebhookUpdateWithoutLinkInputSchema } from './LinkWebhookUpdateWithoutLinkInputSchema';
import { LinkWebhookUncheckedUpdateWithoutLinkInputSchema } from './LinkWebhookUncheckedUpdateWithoutLinkInputSchema';

export const LinkWebhookUpdateWithWhereUniqueWithoutLinkInputSchema: z.ZodType<Prisma.LinkWebhookUpdateWithWhereUniqueWithoutLinkInput> = z.object({
  where: z.lazy(() => LinkWebhookWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LinkWebhookUpdateWithoutLinkInputSchema),z.lazy(() => LinkWebhookUncheckedUpdateWithoutLinkInputSchema) ]),
}).strict();

export default LinkWebhookUpdateWithWhereUniqueWithoutLinkInputSchema;
