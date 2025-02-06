import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWebhookWhereUniqueInputSchema } from './LinkWebhookWhereUniqueInputSchema';
import { LinkWebhookUpdateWithoutWebhookInputSchema } from './LinkWebhookUpdateWithoutWebhookInputSchema';
import { LinkWebhookUncheckedUpdateWithoutWebhookInputSchema } from './LinkWebhookUncheckedUpdateWithoutWebhookInputSchema';
import { LinkWebhookCreateWithoutWebhookInputSchema } from './LinkWebhookCreateWithoutWebhookInputSchema';
import { LinkWebhookUncheckedCreateWithoutWebhookInputSchema } from './LinkWebhookUncheckedCreateWithoutWebhookInputSchema';

export const LinkWebhookUpsertWithWhereUniqueWithoutWebhookInputSchema: z.ZodType<Prisma.LinkWebhookUpsertWithWhereUniqueWithoutWebhookInput> = z.object({
  where: z.lazy(() => LinkWebhookWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LinkWebhookUpdateWithoutWebhookInputSchema),z.lazy(() => LinkWebhookUncheckedUpdateWithoutWebhookInputSchema) ]),
  create: z.union([ z.lazy(() => LinkWebhookCreateWithoutWebhookInputSchema),z.lazy(() => LinkWebhookUncheckedCreateWithoutWebhookInputSchema) ]),
}).strict();

export default LinkWebhookUpsertWithWhereUniqueWithoutWebhookInputSchema;
