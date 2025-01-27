import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema';
import { InboxUpdateWithoutTransactionInputSchema } from './InboxUpdateWithoutTransactionInputSchema';
import { InboxUncheckedUpdateWithoutTransactionInputSchema } from './InboxUncheckedUpdateWithoutTransactionInputSchema';
import { InboxCreateWithoutTransactionInputSchema } from './InboxCreateWithoutTransactionInputSchema';
import { InboxUncheckedCreateWithoutTransactionInputSchema } from './InboxUncheckedCreateWithoutTransactionInputSchema';

export const InboxUpsertWithWhereUniqueWithoutTransactionInputSchema: z.ZodType<Prisma.InboxUpsertWithWhereUniqueWithoutTransactionInput> = z.object({
  where: z.lazy(() => InboxWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InboxUpdateWithoutTransactionInputSchema),z.lazy(() => InboxUncheckedUpdateWithoutTransactionInputSchema) ]),
  create: z.union([ z.lazy(() => InboxCreateWithoutTransactionInputSchema),z.lazy(() => InboxUncheckedCreateWithoutTransactionInputSchema) ]),
}).strict();

export default InboxUpsertWithWhereUniqueWithoutTransactionInputSchema;
