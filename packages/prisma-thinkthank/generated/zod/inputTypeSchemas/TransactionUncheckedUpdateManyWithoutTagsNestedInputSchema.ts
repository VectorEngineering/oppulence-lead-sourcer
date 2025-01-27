import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCreateWithoutTagsInputSchema } from './TransactionCreateWithoutTagsInputSchema';
import { TransactionUncheckedCreateWithoutTagsInputSchema } from './TransactionUncheckedCreateWithoutTagsInputSchema';
import { TransactionCreateOrConnectWithoutTagsInputSchema } from './TransactionCreateOrConnectWithoutTagsInputSchema';
import { TransactionUpsertWithWhereUniqueWithoutTagsInputSchema } from './TransactionUpsertWithWhereUniqueWithoutTagsInputSchema';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionUpdateWithWhereUniqueWithoutTagsInputSchema } from './TransactionUpdateWithWhereUniqueWithoutTagsInputSchema';
import { TransactionUpdateManyWithWhereWithoutTagsInputSchema } from './TransactionUpdateManyWithWhereWithoutTagsInputSchema';
import { TransactionScalarWhereInputSchema } from './TransactionScalarWhereInputSchema';

export const TransactionUncheckedUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutTagsInputSchema),z.lazy(() => TransactionCreateWithoutTagsInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutTagsInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TransactionUpsertWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => TransactionUpsertWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TransactionUpdateWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => TransactionUpdateWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TransactionUpdateManyWithWhereWithoutTagsInputSchema),z.lazy(() => TransactionUpdateManyWithWhereWithoutTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TransactionUncheckedUpdateManyWithoutTagsNestedInputSchema;
