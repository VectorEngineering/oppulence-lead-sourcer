import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxUpdateWithoutChildrenInputSchema } from './InboxUpdateWithoutChildrenInputSchema';
import { InboxUncheckedUpdateWithoutChildrenInputSchema } from './InboxUncheckedUpdateWithoutChildrenInputSchema';
import { InboxCreateWithoutChildrenInputSchema } from './InboxCreateWithoutChildrenInputSchema';
import { InboxUncheckedCreateWithoutChildrenInputSchema } from './InboxUncheckedCreateWithoutChildrenInputSchema';
import { InboxWhereInputSchema } from './InboxWhereInputSchema';

export const InboxUpsertWithoutChildrenInputSchema: z.ZodType<Prisma.InboxUpsertWithoutChildrenInput> = z.object({
  update: z.union([ z.lazy(() => InboxUpdateWithoutChildrenInputSchema),z.lazy(() => InboxUncheckedUpdateWithoutChildrenInputSchema) ]),
  create: z.union([ z.lazy(() => InboxCreateWithoutChildrenInputSchema),z.lazy(() => InboxUncheckedCreateWithoutChildrenInputSchema) ]),
  where: z.lazy(() => InboxWhereInputSchema).optional()
}).strict();

export default InboxUpsertWithoutChildrenInputSchema;
