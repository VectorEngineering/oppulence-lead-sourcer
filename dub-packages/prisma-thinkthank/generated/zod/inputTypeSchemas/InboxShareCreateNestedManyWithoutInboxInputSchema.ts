import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxShareCreateWithoutInboxInputSchema } from './InboxShareCreateWithoutInboxInputSchema';
import { InboxShareUncheckedCreateWithoutInboxInputSchema } from './InboxShareUncheckedCreateWithoutInboxInputSchema';
import { InboxShareCreateOrConnectWithoutInboxInputSchema } from './InboxShareCreateOrConnectWithoutInboxInputSchema';
import { InboxShareCreateManyInboxInputEnvelopeSchema } from './InboxShareCreateManyInboxInputEnvelopeSchema';
import { InboxShareWhereUniqueInputSchema } from './InboxShareWhereUniqueInputSchema';

export const InboxShareCreateNestedManyWithoutInboxInputSchema: z.ZodType<Prisma.InboxShareCreateNestedManyWithoutInboxInput> = z.object({
  create: z.union([ z.lazy(() => InboxShareCreateWithoutInboxInputSchema),z.lazy(() => InboxShareCreateWithoutInboxInputSchema).array(),z.lazy(() => InboxShareUncheckedCreateWithoutInboxInputSchema),z.lazy(() => InboxShareUncheckedCreateWithoutInboxInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InboxShareCreateOrConnectWithoutInboxInputSchema),z.lazy(() => InboxShareCreateOrConnectWithoutInboxInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InboxShareCreateManyInboxInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InboxShareWhereUniqueInputSchema),z.lazy(() => InboxShareWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default InboxShareCreateNestedManyWithoutInboxInputSchema;
