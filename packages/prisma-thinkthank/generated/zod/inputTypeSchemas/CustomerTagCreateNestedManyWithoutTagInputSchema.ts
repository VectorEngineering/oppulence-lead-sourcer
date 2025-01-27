import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerTagCreateWithoutTagInputSchema } from './CustomerTagCreateWithoutTagInputSchema';
import { CustomerTagUncheckedCreateWithoutTagInputSchema } from './CustomerTagUncheckedCreateWithoutTagInputSchema';
import { CustomerTagCreateOrConnectWithoutTagInputSchema } from './CustomerTagCreateOrConnectWithoutTagInputSchema';
import { CustomerTagCreateManyTagInputEnvelopeSchema } from './CustomerTagCreateManyTagInputEnvelopeSchema';
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema';

export const CustomerTagCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.CustomerTagCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => CustomerTagCreateWithoutTagInputSchema),z.lazy(() => CustomerTagCreateWithoutTagInputSchema).array(),z.lazy(() => CustomerTagUncheckedCreateWithoutTagInputSchema),z.lazy(() => CustomerTagUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CustomerTagCreateOrConnectWithoutTagInputSchema),z.lazy(() => CustomerTagCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CustomerTagCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CustomerTagWhereUniqueInputSchema),z.lazy(() => CustomerTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CustomerTagCreateNestedManyWithoutTagInputSchema;
