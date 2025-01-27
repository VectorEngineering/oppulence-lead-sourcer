import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxShareCreateWithoutInboxInputSchema } from './InboxShareCreateWithoutInboxInputSchema';
import { InboxShareUncheckedCreateWithoutInboxInputSchema } from './InboxShareUncheckedCreateWithoutInboxInputSchema';
import { InboxShareCreateOrConnectWithoutInboxInputSchema } from './InboxShareCreateOrConnectWithoutInboxInputSchema';
import { InboxShareUpsertWithWhereUniqueWithoutInboxInputSchema } from './InboxShareUpsertWithWhereUniqueWithoutInboxInputSchema';
import { InboxShareCreateManyInboxInputEnvelopeSchema } from './InboxShareCreateManyInboxInputEnvelopeSchema';
import { InboxShareWhereUniqueInputSchema } from './InboxShareWhereUniqueInputSchema';
import { InboxShareUpdateWithWhereUniqueWithoutInboxInputSchema } from './InboxShareUpdateWithWhereUniqueWithoutInboxInputSchema';
import { InboxShareUpdateManyWithWhereWithoutInboxInputSchema } from './InboxShareUpdateManyWithWhereWithoutInboxInputSchema';
import { InboxShareScalarWhereInputSchema } from './InboxShareScalarWhereInputSchema';

export const InboxShareUpdateManyWithoutInboxNestedInputSchema: z.ZodType<Prisma.InboxShareUpdateManyWithoutInboxNestedInput> = z.object({
  create: z.union([ z.lazy(() => InboxShareCreateWithoutInboxInputSchema),z.lazy(() => InboxShareCreateWithoutInboxInputSchema).array(),z.lazy(() => InboxShareUncheckedCreateWithoutInboxInputSchema),z.lazy(() => InboxShareUncheckedCreateWithoutInboxInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InboxShareCreateOrConnectWithoutInboxInputSchema),z.lazy(() => InboxShareCreateOrConnectWithoutInboxInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InboxShareUpsertWithWhereUniqueWithoutInboxInputSchema),z.lazy(() => InboxShareUpsertWithWhereUniqueWithoutInboxInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InboxShareCreateManyInboxInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InboxShareWhereUniqueInputSchema),z.lazy(() => InboxShareWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InboxShareWhereUniqueInputSchema),z.lazy(() => InboxShareWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InboxShareWhereUniqueInputSchema),z.lazy(() => InboxShareWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InboxShareWhereUniqueInputSchema),z.lazy(() => InboxShareWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InboxShareUpdateWithWhereUniqueWithoutInboxInputSchema),z.lazy(() => InboxShareUpdateWithWhereUniqueWithoutInboxInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InboxShareUpdateManyWithWhereWithoutInboxInputSchema),z.lazy(() => InboxShareUpdateManyWithWhereWithoutInboxInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InboxShareScalarWhereInputSchema),z.lazy(() => InboxShareScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default InboxShareUpdateManyWithoutInboxNestedInputSchema;
