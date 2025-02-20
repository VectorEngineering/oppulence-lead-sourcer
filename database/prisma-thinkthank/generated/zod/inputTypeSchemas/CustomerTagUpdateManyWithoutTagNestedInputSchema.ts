import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerTagCreateWithoutTagInputSchema } from './CustomerTagCreateWithoutTagInputSchema';
import { CustomerTagUncheckedCreateWithoutTagInputSchema } from './CustomerTagUncheckedCreateWithoutTagInputSchema';
import { CustomerTagCreateOrConnectWithoutTagInputSchema } from './CustomerTagCreateOrConnectWithoutTagInputSchema';
import { CustomerTagUpsertWithWhereUniqueWithoutTagInputSchema } from './CustomerTagUpsertWithWhereUniqueWithoutTagInputSchema';
import { CustomerTagCreateManyTagInputEnvelopeSchema } from './CustomerTagCreateManyTagInputEnvelopeSchema';
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema';
import { CustomerTagUpdateWithWhereUniqueWithoutTagInputSchema } from './CustomerTagUpdateWithWhereUniqueWithoutTagInputSchema';
import { CustomerTagUpdateManyWithWhereWithoutTagInputSchema } from './CustomerTagUpdateManyWithWhereWithoutTagInputSchema';
import { CustomerTagScalarWhereInputSchema } from './CustomerTagScalarWhereInputSchema';

export const CustomerTagUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.CustomerTagUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => CustomerTagCreateWithoutTagInputSchema),z.lazy(() => CustomerTagCreateWithoutTagInputSchema).array(),z.lazy(() => CustomerTagUncheckedCreateWithoutTagInputSchema),z.lazy(() => CustomerTagUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CustomerTagCreateOrConnectWithoutTagInputSchema),z.lazy(() => CustomerTagCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CustomerTagUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => CustomerTagUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CustomerTagCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CustomerTagWhereUniqueInputSchema),z.lazy(() => CustomerTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CustomerTagWhereUniqueInputSchema),z.lazy(() => CustomerTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CustomerTagWhereUniqueInputSchema),z.lazy(() => CustomerTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CustomerTagWhereUniqueInputSchema),z.lazy(() => CustomerTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CustomerTagUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => CustomerTagUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CustomerTagUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => CustomerTagUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CustomerTagScalarWhereInputSchema),z.lazy(() => CustomerTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CustomerTagUpdateManyWithoutTagNestedInputSchema;
