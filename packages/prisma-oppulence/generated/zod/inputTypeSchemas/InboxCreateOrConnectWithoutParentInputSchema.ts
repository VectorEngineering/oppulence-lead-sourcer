import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema';
import { InboxCreateWithoutParentInputSchema } from './InboxCreateWithoutParentInputSchema';
import { InboxUncheckedCreateWithoutParentInputSchema } from './InboxUncheckedCreateWithoutParentInputSchema';

export const InboxCreateOrConnectWithoutParentInputSchema: z.ZodType<Prisma.InboxCreateOrConnectWithoutParentInput> = z.object({
  where: z.lazy(() => InboxWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InboxCreateWithoutParentInputSchema),z.lazy(() => InboxUncheckedCreateWithoutParentInputSchema) ]),
}).strict();

export default InboxCreateOrConnectWithoutParentInputSchema;
