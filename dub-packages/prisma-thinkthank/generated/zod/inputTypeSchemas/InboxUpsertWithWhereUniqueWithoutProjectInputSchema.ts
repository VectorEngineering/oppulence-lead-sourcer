import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema';
import { InboxUpdateWithoutProjectInputSchema } from './InboxUpdateWithoutProjectInputSchema';
import { InboxUncheckedUpdateWithoutProjectInputSchema } from './InboxUncheckedUpdateWithoutProjectInputSchema';
import { InboxCreateWithoutProjectInputSchema } from './InboxCreateWithoutProjectInputSchema';
import { InboxUncheckedCreateWithoutProjectInputSchema } from './InboxUncheckedCreateWithoutProjectInputSchema';

export const InboxUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.InboxUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => InboxWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InboxUpdateWithoutProjectInputSchema),z.lazy(() => InboxUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => InboxCreateWithoutProjectInputSchema),z.lazy(() => InboxUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default InboxUpsertWithWhereUniqueWithoutProjectInputSchema;
