import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionCreateWithoutInboxInputSchema } from './TransactionCreateWithoutInboxInputSchema';
import { TransactionUncheckedCreateWithoutInboxInputSchema } from './TransactionUncheckedCreateWithoutInboxInputSchema';

export const TransactionCreateOrConnectWithoutInboxInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutInboxInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionCreateWithoutInboxInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutInboxInputSchema) ]),
}).strict();

export default TransactionCreateOrConnectWithoutInboxInputSchema;
