import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxShareWhereUniqueInputSchema } from './InboxShareWhereUniqueInputSchema';
import { InboxShareUpdateWithoutInboxInputSchema } from './InboxShareUpdateWithoutInboxInputSchema';
import { InboxShareUncheckedUpdateWithoutInboxInputSchema } from './InboxShareUncheckedUpdateWithoutInboxInputSchema';

export const InboxShareUpdateWithWhereUniqueWithoutInboxInputSchema: z.ZodType<Prisma.InboxShareUpdateWithWhereUniqueWithoutInboxInput> = z.object({
  where: z.lazy(() => InboxShareWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InboxShareUpdateWithoutInboxInputSchema),z.lazy(() => InboxShareUncheckedUpdateWithoutInboxInputSchema) ]),
}).strict();

export default InboxShareUpdateWithWhereUniqueWithoutInboxInputSchema;
