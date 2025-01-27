import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerScalarWhereInputSchema } from './CustomerScalarWhereInputSchema';
import { CustomerUpdateManyMutationInputSchema } from './CustomerUpdateManyMutationInputSchema';
import { CustomerUncheckedUpdateManyWithoutProjectInputSchema } from './CustomerUncheckedUpdateManyWithoutProjectInputSchema';

export const CustomerUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.CustomerUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => CustomerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CustomerUpdateManyMutationInputSchema),z.lazy(() => CustomerUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default CustomerUpdateManyWithWhereWithoutProjectInputSchema;
