import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema';
import { InboxCreateWithoutActivitiesInputSchema } from './InboxCreateWithoutActivitiesInputSchema';
import { InboxUncheckedCreateWithoutActivitiesInputSchema } from './InboxUncheckedCreateWithoutActivitiesInputSchema';

export const InboxCreateOrConnectWithoutActivitiesInputSchema: z.ZodType<Prisma.InboxCreateOrConnectWithoutActivitiesInput> = z.object({
  where: z.lazy(() => InboxWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InboxCreateWithoutActivitiesInputSchema),z.lazy(() => InboxUncheckedCreateWithoutActivitiesInputSchema) ]),
}).strict();

export default InboxCreateOrConnectWithoutActivitiesInputSchema;
