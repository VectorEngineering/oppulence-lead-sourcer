import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema';
import { InboxUpdateWithoutParentInputSchema } from './InboxUpdateWithoutParentInputSchema';
import { InboxUncheckedUpdateWithoutParentInputSchema } from './InboxUncheckedUpdateWithoutParentInputSchema';
import { InboxCreateWithoutParentInputSchema } from './InboxCreateWithoutParentInputSchema';
import { InboxUncheckedCreateWithoutParentInputSchema } from './InboxUncheckedCreateWithoutParentInputSchema';

export const InboxUpsertWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.InboxUpsertWithWhereUniqueWithoutParentInput> = z.object({
  where: z.lazy(() => InboxWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InboxUpdateWithoutParentInputSchema),z.lazy(() => InboxUncheckedUpdateWithoutParentInputSchema) ]),
  create: z.union([ z.lazy(() => InboxCreateWithoutParentInputSchema),z.lazy(() => InboxUncheckedCreateWithoutParentInputSchema) ]),
}).strict();

export default InboxUpsertWithWhereUniqueWithoutParentInputSchema;
