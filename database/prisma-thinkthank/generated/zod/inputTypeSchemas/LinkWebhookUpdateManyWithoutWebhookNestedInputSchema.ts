import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWebhookCreateWithoutWebhookInputSchema } from './LinkWebhookCreateWithoutWebhookInputSchema';
import { LinkWebhookUncheckedCreateWithoutWebhookInputSchema } from './LinkWebhookUncheckedCreateWithoutWebhookInputSchema';
import { LinkWebhookCreateOrConnectWithoutWebhookInputSchema } from './LinkWebhookCreateOrConnectWithoutWebhookInputSchema';
import { LinkWebhookUpsertWithWhereUniqueWithoutWebhookInputSchema } from './LinkWebhookUpsertWithWhereUniqueWithoutWebhookInputSchema';
import { LinkWebhookCreateManyWebhookInputEnvelopeSchema } from './LinkWebhookCreateManyWebhookInputEnvelopeSchema';
import { LinkWebhookWhereUniqueInputSchema } from './LinkWebhookWhereUniqueInputSchema';
import { LinkWebhookUpdateWithWhereUniqueWithoutWebhookInputSchema } from './LinkWebhookUpdateWithWhereUniqueWithoutWebhookInputSchema';
import { LinkWebhookUpdateManyWithWhereWithoutWebhookInputSchema } from './LinkWebhookUpdateManyWithWhereWithoutWebhookInputSchema';
import { LinkWebhookScalarWhereInputSchema } from './LinkWebhookScalarWhereInputSchema';

export const LinkWebhookUpdateManyWithoutWebhookNestedInputSchema: z.ZodType<Prisma.LinkWebhookUpdateManyWithoutWebhookNestedInput> = z.object({
  create: z.union([ z.lazy(() => LinkWebhookCreateWithoutWebhookInputSchema),z.lazy(() => LinkWebhookCreateWithoutWebhookInputSchema).array(),z.lazy(() => LinkWebhookUncheckedCreateWithoutWebhookInputSchema),z.lazy(() => LinkWebhookUncheckedCreateWithoutWebhookInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkWebhookCreateOrConnectWithoutWebhookInputSchema),z.lazy(() => LinkWebhookCreateOrConnectWithoutWebhookInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LinkWebhookUpsertWithWhereUniqueWithoutWebhookInputSchema),z.lazy(() => LinkWebhookUpsertWithWhereUniqueWithoutWebhookInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkWebhookCreateManyWebhookInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LinkWebhookWhereUniqueInputSchema),z.lazy(() => LinkWebhookWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LinkWebhookWhereUniqueInputSchema),z.lazy(() => LinkWebhookWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LinkWebhookWhereUniqueInputSchema),z.lazy(() => LinkWebhookWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LinkWebhookWhereUniqueInputSchema),z.lazy(() => LinkWebhookWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LinkWebhookUpdateWithWhereUniqueWithoutWebhookInputSchema),z.lazy(() => LinkWebhookUpdateWithWhereUniqueWithoutWebhookInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LinkWebhookUpdateManyWithWhereWithoutWebhookInputSchema),z.lazy(() => LinkWebhookUpdateManyWithWhereWithoutWebhookInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LinkWebhookScalarWhereInputSchema),z.lazy(() => LinkWebhookScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LinkWebhookUpdateManyWithoutWebhookNestedInputSchema;
