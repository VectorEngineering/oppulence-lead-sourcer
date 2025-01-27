import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutProjectInputSchema } from './CustomerCreateWithoutProjectInputSchema';
import { CustomerUncheckedCreateWithoutProjectInputSchema } from './CustomerUncheckedCreateWithoutProjectInputSchema';
import { CustomerCreateOrConnectWithoutProjectInputSchema } from './CustomerCreateOrConnectWithoutProjectInputSchema';
import { CustomerUpsertWithWhereUniqueWithoutProjectInputSchema } from './CustomerUpsertWithWhereUniqueWithoutProjectInputSchema';
import { CustomerCreateManyProjectInputEnvelopeSchema } from './CustomerCreateManyProjectInputEnvelopeSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateWithWhereUniqueWithoutProjectInputSchema } from './CustomerUpdateWithWhereUniqueWithoutProjectInputSchema';
import { CustomerUpdateManyWithWhereWithoutProjectInputSchema } from './CustomerUpdateManyWithWhereWithoutProjectInputSchema';
import { CustomerScalarWhereInputSchema } from './CustomerScalarWhereInputSchema';

export const CustomerUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.CustomerUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutProjectInputSchema),z.lazy(() => CustomerCreateWithoutProjectInputSchema).array(),z.lazy(() => CustomerUncheckedCreateWithoutProjectInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CustomerCreateOrConnectWithoutProjectInputSchema),z.lazy(() => CustomerCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CustomerUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => CustomerUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CustomerCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CustomerUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => CustomerUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CustomerUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => CustomerUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CustomerScalarWhereInputSchema),z.lazy(() => CustomerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CustomerUncheckedUpdateManyWithoutProjectNestedInputSchema;
