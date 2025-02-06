import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxCreateWithoutActivitiesInputSchema } from './InboxCreateWithoutActivitiesInputSchema';
import { InboxUncheckedCreateWithoutActivitiesInputSchema } from './InboxUncheckedCreateWithoutActivitiesInputSchema';
import { InboxCreateOrConnectWithoutActivitiesInputSchema } from './InboxCreateOrConnectWithoutActivitiesInputSchema';
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema';

export const InboxCreateNestedOneWithoutActivitiesInputSchema: z.ZodType<Prisma.InboxCreateNestedOneWithoutActivitiesInput> = z.object({
  create: z.union([ z.lazy(() => InboxCreateWithoutActivitiesInputSchema),z.lazy(() => InboxUncheckedCreateWithoutActivitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InboxCreateOrConnectWithoutActivitiesInputSchema).optional(),
  connect: z.lazy(() => InboxWhereUniqueInputSchema).optional()
}).strict();

export default InboxCreateNestedOneWithoutActivitiesInputSchema;
