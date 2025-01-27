import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWebhookCreateWithoutLinkInputSchema } from './LinkWebhookCreateWithoutLinkInputSchema';
import { LinkWebhookUncheckedCreateWithoutLinkInputSchema } from './LinkWebhookUncheckedCreateWithoutLinkInputSchema';
import { LinkWebhookCreateOrConnectWithoutLinkInputSchema } from './LinkWebhookCreateOrConnectWithoutLinkInputSchema';
import { LinkWebhookUpsertWithWhereUniqueWithoutLinkInputSchema } from './LinkWebhookUpsertWithWhereUniqueWithoutLinkInputSchema';
import { LinkWebhookCreateManyLinkInputEnvelopeSchema } from './LinkWebhookCreateManyLinkInputEnvelopeSchema';
import { LinkWebhookWhereUniqueInputSchema } from './LinkWebhookWhereUniqueInputSchema';
import { LinkWebhookUpdateWithWhereUniqueWithoutLinkInputSchema } from './LinkWebhookUpdateWithWhereUniqueWithoutLinkInputSchema';
import { LinkWebhookUpdateManyWithWhereWithoutLinkInputSchema } from './LinkWebhookUpdateManyWithWhereWithoutLinkInputSchema';
import { LinkWebhookScalarWhereInputSchema } from './LinkWebhookScalarWhereInputSchema';

export const LinkWebhookUpdateManyWithoutLinkNestedInputSchema: z.ZodType<Prisma.LinkWebhookUpdateManyWithoutLinkNestedInput> = z.object({
  create: z.union([ z.lazy(() => LinkWebhookCreateWithoutLinkInputSchema),z.lazy(() => LinkWebhookCreateWithoutLinkInputSchema).array(),z.lazy(() => LinkWebhookUncheckedCreateWithoutLinkInputSchema),z.lazy(() => LinkWebhookUncheckedCreateWithoutLinkInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkWebhookCreateOrConnectWithoutLinkInputSchema),z.lazy(() => LinkWebhookCreateOrConnectWithoutLinkInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LinkWebhookUpsertWithWhereUniqueWithoutLinkInputSchema),z.lazy(() => LinkWebhookUpsertWithWhereUniqueWithoutLinkInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkWebhookCreateManyLinkInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LinkWebhookWhereUniqueInputSchema),z.lazy(() => LinkWebhookWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LinkWebhookWhereUniqueInputSchema),z.lazy(() => LinkWebhookWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LinkWebhookWhereUniqueInputSchema),z.lazy(() => LinkWebhookWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LinkWebhookWhereUniqueInputSchema),z.lazy(() => LinkWebhookWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LinkWebhookUpdateWithWhereUniqueWithoutLinkInputSchema),z.lazy(() => LinkWebhookUpdateWithWhereUniqueWithoutLinkInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LinkWebhookUpdateManyWithWhereWithoutLinkInputSchema),z.lazy(() => LinkWebhookUpdateManyWithWhereWithoutLinkInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LinkWebhookScalarWhereInputSchema),z.lazy(() => LinkWebhookScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LinkWebhookUpdateManyWithoutLinkNestedInputSchema;
