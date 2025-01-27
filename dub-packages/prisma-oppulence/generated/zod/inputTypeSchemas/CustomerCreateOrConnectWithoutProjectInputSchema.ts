import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerCreateWithoutProjectInputSchema } from './CustomerCreateWithoutProjectInputSchema';
import { CustomerUncheckedCreateWithoutProjectInputSchema } from './CustomerUncheckedCreateWithoutProjectInputSchema';

export const CustomerCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => CustomerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CustomerCreateWithoutProjectInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default CustomerCreateOrConnectWithoutProjectInputSchema;
