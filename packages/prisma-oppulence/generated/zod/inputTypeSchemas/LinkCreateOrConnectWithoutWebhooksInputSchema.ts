import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';
import { LinkCreateWithoutWebhooksInputSchema } from './LinkCreateWithoutWebhooksInputSchema';
import { LinkUncheckedCreateWithoutWebhooksInputSchema } from './LinkUncheckedCreateWithoutWebhooksInputSchema';

export const LinkCreateOrConnectWithoutWebhooksInputSchema: z.ZodType<Prisma.LinkCreateOrConnectWithoutWebhooksInput> = z.object({
  where: z.lazy(() => LinkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LinkCreateWithoutWebhooksInputSchema),z.lazy(() => LinkUncheckedCreateWithoutWebhooksInputSchema) ]),
}).strict();

export default LinkCreateOrConnectWithoutWebhooksInputSchema;
