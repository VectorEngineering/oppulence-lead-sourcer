import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerTagCreateWithoutProjectInputSchema } from './CustomerTagCreateWithoutProjectInputSchema';
import { CustomerTagUncheckedCreateWithoutProjectInputSchema } from './CustomerTagUncheckedCreateWithoutProjectInputSchema';
import { CustomerTagCreateOrConnectWithoutProjectInputSchema } from './CustomerTagCreateOrConnectWithoutProjectInputSchema';
import { CustomerTagCreateManyProjectInputEnvelopeSchema } from './CustomerTagCreateManyProjectInputEnvelopeSchema';
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema';

export const CustomerTagCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.CustomerTagCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => CustomerTagCreateWithoutProjectInputSchema),z.lazy(() => CustomerTagCreateWithoutProjectInputSchema).array(),z.lazy(() => CustomerTagUncheckedCreateWithoutProjectInputSchema),z.lazy(() => CustomerTagUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CustomerTagCreateOrConnectWithoutProjectInputSchema),z.lazy(() => CustomerTagCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CustomerTagCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CustomerTagWhereUniqueInputSchema),z.lazy(() => CustomerTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CustomerTagCreateNestedManyWithoutProjectInputSchema;
