import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema';
import { InboxCreateWithoutChildrenInputSchema } from './InboxCreateWithoutChildrenInputSchema';
import { InboxUncheckedCreateWithoutChildrenInputSchema } from './InboxUncheckedCreateWithoutChildrenInputSchema';

export const InboxCreateOrConnectWithoutChildrenInputSchema: z.ZodType<Prisma.InboxCreateOrConnectWithoutChildrenInput> = z.object({
  where: z.lazy(() => InboxWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InboxCreateWithoutChildrenInputSchema),z.lazy(() => InboxUncheckedCreateWithoutChildrenInputSchema) ]),
}).strict();

export default InboxCreateOrConnectWithoutChildrenInputSchema;
