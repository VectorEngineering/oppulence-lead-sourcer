import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateWithoutWebhooksInputSchema } from './LinkCreateWithoutWebhooksInputSchema';
import { LinkUncheckedCreateWithoutWebhooksInputSchema } from './LinkUncheckedCreateWithoutWebhooksInputSchema';
import { LinkCreateOrConnectWithoutWebhooksInputSchema } from './LinkCreateOrConnectWithoutWebhooksInputSchema';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';

export const LinkCreateNestedOneWithoutWebhooksInputSchema: z.ZodType<Prisma.LinkCreateNestedOneWithoutWebhooksInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutWebhooksInputSchema),z.lazy(() => LinkUncheckedCreateWithoutWebhooksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LinkCreateOrConnectWithoutWebhooksInputSchema).optional(),
  connect: z.lazy(() => LinkWhereUniqueInputSchema).optional()
}).strict();

export default LinkCreateNestedOneWithoutWebhooksInputSchema;
