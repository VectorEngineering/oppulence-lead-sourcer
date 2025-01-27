import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCreateWithoutProjectInputSchema } from './TransactionCreateWithoutProjectInputSchema';
import { TransactionUncheckedCreateWithoutProjectInputSchema } from './TransactionUncheckedCreateWithoutProjectInputSchema';
import { TransactionCreateOrConnectWithoutProjectInputSchema } from './TransactionCreateOrConnectWithoutProjectInputSchema';
import { TransactionUpsertWithWhereUniqueWithoutProjectInputSchema } from './TransactionUpsertWithWhereUniqueWithoutProjectInputSchema';
import { TransactionCreateManyProjectInputEnvelopeSchema } from './TransactionCreateManyProjectInputEnvelopeSchema';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionUpdateWithWhereUniqueWithoutProjectInputSchema } from './TransactionUpdateWithWhereUniqueWithoutProjectInputSchema';
import { TransactionUpdateManyWithWhereWithoutProjectInputSchema } from './TransactionUpdateManyWithWhereWithoutProjectInputSchema';
import { TransactionScalarWhereInputSchema } from './TransactionScalarWhereInputSchema';

export const TransactionUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutProjectInputSchema),z.lazy(() => TransactionCreateWithoutProjectInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutProjectInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutProjectInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TransactionUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => TransactionUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TransactionUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => TransactionUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TransactionUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => TransactionUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TransactionUpdateManyWithoutProjectNestedInputSchema;
