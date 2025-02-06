import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxActivityCreateWithoutInboxInputSchema } from './InboxActivityCreateWithoutInboxInputSchema';
import { InboxActivityUncheckedCreateWithoutInboxInputSchema } from './InboxActivityUncheckedCreateWithoutInboxInputSchema';
import { InboxActivityCreateOrConnectWithoutInboxInputSchema } from './InboxActivityCreateOrConnectWithoutInboxInputSchema';
import { InboxActivityCreateManyInboxInputEnvelopeSchema } from './InboxActivityCreateManyInboxInputEnvelopeSchema';
import { InboxActivityWhereUniqueInputSchema } from './InboxActivityWhereUniqueInputSchema';

export const InboxActivityCreateNestedManyWithoutInboxInputSchema: z.ZodType<Prisma.InboxActivityCreateNestedManyWithoutInboxInput> = z.object({
  create: z.union([ z.lazy(() => InboxActivityCreateWithoutInboxInputSchema),z.lazy(() => InboxActivityCreateWithoutInboxInputSchema).array(),z.lazy(() => InboxActivityUncheckedCreateWithoutInboxInputSchema),z.lazy(() => InboxActivityUncheckedCreateWithoutInboxInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InboxActivityCreateOrConnectWithoutInboxInputSchema),z.lazy(() => InboxActivityCreateOrConnectWithoutInboxInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InboxActivityCreateManyInboxInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InboxActivityWhereUniqueInputSchema),z.lazy(() => InboxActivityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default InboxActivityCreateNestedManyWithoutInboxInputSchema;
