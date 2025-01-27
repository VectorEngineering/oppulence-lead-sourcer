import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutProjectInputSchema } from './CustomerCreateWithoutProjectInputSchema';
import { CustomerUncheckedCreateWithoutProjectInputSchema } from './CustomerUncheckedCreateWithoutProjectInputSchema';
import { CustomerCreateOrConnectWithoutProjectInputSchema } from './CustomerCreateOrConnectWithoutProjectInputSchema';
import { CustomerCreateManyProjectInputEnvelopeSchema } from './CustomerCreateManyProjectInputEnvelopeSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';

export const CustomerCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.CustomerCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutProjectInputSchema),z.lazy(() => CustomerCreateWithoutProjectInputSchema).array(),z.lazy(() => CustomerUncheckedCreateWithoutProjectInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CustomerCreateOrConnectWithoutProjectInputSchema),z.lazy(() => CustomerCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CustomerCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CustomerCreateNestedManyWithoutProjectInputSchema;
