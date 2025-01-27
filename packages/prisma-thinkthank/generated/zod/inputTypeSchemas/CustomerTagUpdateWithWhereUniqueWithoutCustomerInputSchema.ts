import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema';
import { CustomerTagUpdateWithoutCustomerInputSchema } from './CustomerTagUpdateWithoutCustomerInputSchema';
import { CustomerTagUncheckedUpdateWithoutCustomerInputSchema } from './CustomerTagUncheckedUpdateWithoutCustomerInputSchema';

export const CustomerTagUpdateWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.CustomerTagUpdateWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => CustomerTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CustomerTagUpdateWithoutCustomerInputSchema),z.lazy(() => CustomerTagUncheckedUpdateWithoutCustomerInputSchema) ]),
}).strict();

export default CustomerTagUpdateWithWhereUniqueWithoutCustomerInputSchema;
