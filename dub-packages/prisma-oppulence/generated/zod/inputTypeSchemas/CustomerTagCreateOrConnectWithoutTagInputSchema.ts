import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema';
import { CustomerTagCreateWithoutTagInputSchema } from './CustomerTagCreateWithoutTagInputSchema';
import { CustomerTagUncheckedCreateWithoutTagInputSchema } from './CustomerTagUncheckedCreateWithoutTagInputSchema';

export const CustomerTagCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.CustomerTagCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => CustomerTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CustomerTagCreateWithoutTagInputSchema),z.lazy(() => CustomerTagUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default CustomerTagCreateOrConnectWithoutTagInputSchema;
