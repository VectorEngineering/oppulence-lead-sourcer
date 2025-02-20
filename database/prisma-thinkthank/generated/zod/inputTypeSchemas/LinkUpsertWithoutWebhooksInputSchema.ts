import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkUpdateWithoutWebhooksInputSchema } from './LinkUpdateWithoutWebhooksInputSchema';
import { LinkUncheckedUpdateWithoutWebhooksInputSchema } from './LinkUncheckedUpdateWithoutWebhooksInputSchema';
import { LinkCreateWithoutWebhooksInputSchema } from './LinkCreateWithoutWebhooksInputSchema';
import { LinkUncheckedCreateWithoutWebhooksInputSchema } from './LinkUncheckedCreateWithoutWebhooksInputSchema';
import { LinkWhereInputSchema } from './LinkWhereInputSchema';

export const LinkUpsertWithoutWebhooksInputSchema: z.ZodType<Prisma.LinkUpsertWithoutWebhooksInput> = z.object({
  update: z.union([ z.lazy(() => LinkUpdateWithoutWebhooksInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutWebhooksInputSchema) ]),
  create: z.union([ z.lazy(() => LinkCreateWithoutWebhooksInputSchema),z.lazy(() => LinkUncheckedCreateWithoutWebhooksInputSchema) ]),
  where: z.lazy(() => LinkWhereInputSchema).optional()
}).strict();

export default LinkUpsertWithoutWebhooksInputSchema;
