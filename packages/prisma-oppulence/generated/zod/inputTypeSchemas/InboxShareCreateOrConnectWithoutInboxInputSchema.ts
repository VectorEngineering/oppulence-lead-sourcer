import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxShareWhereUniqueInputSchema } from './InboxShareWhereUniqueInputSchema';
import { InboxShareCreateWithoutInboxInputSchema } from './InboxShareCreateWithoutInboxInputSchema';
import { InboxShareUncheckedCreateWithoutInboxInputSchema } from './InboxShareUncheckedCreateWithoutInboxInputSchema';

export const InboxShareCreateOrConnectWithoutInboxInputSchema: z.ZodType<Prisma.InboxShareCreateOrConnectWithoutInboxInput> = z.object({
  where: z.lazy(() => InboxShareWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InboxShareCreateWithoutInboxInputSchema),z.lazy(() => InboxShareUncheckedCreateWithoutInboxInputSchema) ]),
}).strict();

export default InboxShareCreateOrConnectWithoutInboxInputSchema;
