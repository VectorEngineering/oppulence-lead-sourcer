import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCreateWithoutTagsInputSchema } from './TransactionCreateWithoutTagsInputSchema';
import { TransactionUncheckedCreateWithoutTagsInputSchema } from './TransactionUncheckedCreateWithoutTagsInputSchema';
import { TransactionCreateOrConnectWithoutTagsInputSchema } from './TransactionCreateOrConnectWithoutTagsInputSchema';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';

export const TransactionUncheckedCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutTagsInputSchema),z.lazy(() => TransactionCreateWithoutTagsInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutTagsInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TransactionUncheckedCreateNestedManyWithoutTagsInputSchema;
