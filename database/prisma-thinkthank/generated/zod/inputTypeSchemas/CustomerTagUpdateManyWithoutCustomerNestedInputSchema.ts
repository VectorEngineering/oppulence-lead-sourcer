import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerTagCreateWithoutCustomerInputSchema } from './CustomerTagCreateWithoutCustomerInputSchema';
import { CustomerTagUncheckedCreateWithoutCustomerInputSchema } from './CustomerTagUncheckedCreateWithoutCustomerInputSchema';
import { CustomerTagCreateOrConnectWithoutCustomerInputSchema } from './CustomerTagCreateOrConnectWithoutCustomerInputSchema';
import { CustomerTagUpsertWithWhereUniqueWithoutCustomerInputSchema } from './CustomerTagUpsertWithWhereUniqueWithoutCustomerInputSchema';
import { CustomerTagCreateManyCustomerInputEnvelopeSchema } from './CustomerTagCreateManyCustomerInputEnvelopeSchema';
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema';
import { CustomerTagUpdateWithWhereUniqueWithoutCustomerInputSchema } from './CustomerTagUpdateWithWhereUniqueWithoutCustomerInputSchema';
import { CustomerTagUpdateManyWithWhereWithoutCustomerInputSchema } from './CustomerTagUpdateManyWithWhereWithoutCustomerInputSchema';
import { CustomerTagScalarWhereInputSchema } from './CustomerTagScalarWhereInputSchema';

export const CustomerTagUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.CustomerTagUpdateManyWithoutCustomerNestedInput> = z.object({
  create: z.union([ z.lazy(() => CustomerTagCreateWithoutCustomerInputSchema),z.lazy(() => CustomerTagCreateWithoutCustomerInputSchema).array(),z.lazy(() => CustomerTagUncheckedCreateWithoutCustomerInputSchema),z.lazy(() => CustomerTagUncheckedCreateWithoutCustomerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CustomerTagCreateOrConnectWithoutCustomerInputSchema),z.lazy(() => CustomerTagCreateOrConnectWithoutCustomerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CustomerTagUpsertWithWhereUniqueWithoutCustomerInputSchema),z.lazy(() => CustomerTagUpsertWithWhereUniqueWithoutCustomerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CustomerTagCreateManyCustomerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CustomerTagWhereUniqueInputSchema),z.lazy(() => CustomerTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CustomerTagWhereUniqueInputSchema),z.lazy(() => CustomerTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CustomerTagWhereUniqueInputSchema),z.lazy(() => CustomerTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CustomerTagWhereUniqueInputSchema),z.lazy(() => CustomerTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CustomerTagUpdateWithWhereUniqueWithoutCustomerInputSchema),z.lazy(() => CustomerTagUpdateWithWhereUniqueWithoutCustomerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CustomerTagUpdateManyWithWhereWithoutCustomerInputSchema),z.lazy(() => CustomerTagUpdateManyWithWhereWithoutCustomerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CustomerTagScalarWhereInputSchema),z.lazy(() => CustomerTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CustomerTagUpdateManyWithoutCustomerNestedInputSchema;
