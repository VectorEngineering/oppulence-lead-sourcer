import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionCreateWithoutTagsInputSchema } from './TransactionCreateWithoutTagsInputSchema';
import { TransactionUncheckedCreateWithoutTagsInputSchema } from './TransactionUncheckedCreateWithoutTagsInputSchema';

export const TransactionCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionCreateWithoutTagsInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default TransactionCreateOrConnectWithoutTagsInputSchema;
