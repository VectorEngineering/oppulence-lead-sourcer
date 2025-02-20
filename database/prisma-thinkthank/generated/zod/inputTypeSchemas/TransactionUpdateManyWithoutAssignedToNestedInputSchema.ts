import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCreateWithoutAssignedToInputSchema } from './TransactionCreateWithoutAssignedToInputSchema';
import { TransactionUncheckedCreateWithoutAssignedToInputSchema } from './TransactionUncheckedCreateWithoutAssignedToInputSchema';
import { TransactionCreateOrConnectWithoutAssignedToInputSchema } from './TransactionCreateOrConnectWithoutAssignedToInputSchema';
import { TransactionUpsertWithWhereUniqueWithoutAssignedToInputSchema } from './TransactionUpsertWithWhereUniqueWithoutAssignedToInputSchema';
import { TransactionCreateManyAssignedToInputEnvelopeSchema } from './TransactionCreateManyAssignedToInputEnvelopeSchema';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionUpdateWithWhereUniqueWithoutAssignedToInputSchema } from './TransactionUpdateWithWhereUniqueWithoutAssignedToInputSchema';
import { TransactionUpdateManyWithWhereWithoutAssignedToInputSchema } from './TransactionUpdateManyWithWhereWithoutAssignedToInputSchema';
import { TransactionScalarWhereInputSchema } from './TransactionScalarWhereInputSchema';

export const TransactionUpdateManyWithoutAssignedToNestedInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithoutAssignedToNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutAssignedToInputSchema),z.lazy(() => TransactionCreateWithoutAssignedToInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutAssignedToInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutAssignedToInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutAssignedToInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutAssignedToInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TransactionUpsertWithWhereUniqueWithoutAssignedToInputSchema),z.lazy(() => TransactionUpsertWithWhereUniqueWithoutAssignedToInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCreateManyAssignedToInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TransactionUpdateWithWhereUniqueWithoutAssignedToInputSchema),z.lazy(() => TransactionUpdateWithWhereUniqueWithoutAssignedToInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TransactionUpdateManyWithWhereWithoutAssignedToInputSchema),z.lazy(() => TransactionUpdateManyWithWhereWithoutAssignedToInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TransactionUpdateManyWithoutAssignedToNestedInputSchema;
