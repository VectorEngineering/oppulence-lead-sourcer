import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateWithoutProjectInputSchema } from './CustomerUpdateWithoutProjectInputSchema';
import { CustomerUncheckedUpdateWithoutProjectInputSchema } from './CustomerUncheckedUpdateWithoutProjectInputSchema';

export const CustomerUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.CustomerUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => CustomerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CustomerUpdateWithoutProjectInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default CustomerUpdateWithWhereUniqueWithoutProjectInputSchema;
