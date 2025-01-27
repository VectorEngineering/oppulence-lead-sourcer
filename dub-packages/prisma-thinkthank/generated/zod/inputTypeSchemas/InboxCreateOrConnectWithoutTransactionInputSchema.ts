import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema';
import { InboxCreateWithoutTransactionInputSchema } from './InboxCreateWithoutTransactionInputSchema';
import { InboxUncheckedCreateWithoutTransactionInputSchema } from './InboxUncheckedCreateWithoutTransactionInputSchema';

export const InboxCreateOrConnectWithoutTransactionInputSchema: z.ZodType<Prisma.InboxCreateOrConnectWithoutTransactionInput> = z.object({
  where: z.lazy(() => InboxWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InboxCreateWithoutTransactionInputSchema),z.lazy(() => InboxUncheckedCreateWithoutTransactionInputSchema) ]),
}).strict();

export default InboxCreateOrConnectWithoutTransactionInputSchema;
