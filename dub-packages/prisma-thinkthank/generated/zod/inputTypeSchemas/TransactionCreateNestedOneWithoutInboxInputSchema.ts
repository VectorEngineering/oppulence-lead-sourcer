import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCreateWithoutInboxInputSchema } from './TransactionCreateWithoutInboxInputSchema';
import { TransactionUncheckedCreateWithoutInboxInputSchema } from './TransactionUncheckedCreateWithoutInboxInputSchema';
import { TransactionCreateOrConnectWithoutInboxInputSchema } from './TransactionCreateOrConnectWithoutInboxInputSchema';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';

export const TransactionCreateNestedOneWithoutInboxInputSchema: z.ZodType<Prisma.TransactionCreateNestedOneWithoutInboxInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutInboxInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutInboxInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TransactionCreateOrConnectWithoutInboxInputSchema).optional(),
  connect: z.lazy(() => TransactionWhereUniqueInputSchema).optional()
}).strict();

export default TransactionCreateNestedOneWithoutInboxInputSchema;
