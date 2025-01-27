import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema';
import { CustomerTagUpdateWithoutCustomerInputSchema } from './CustomerTagUpdateWithoutCustomerInputSchema';
import { CustomerTagUncheckedUpdateWithoutCustomerInputSchema } from './CustomerTagUncheckedUpdateWithoutCustomerInputSchema';
import { CustomerTagCreateWithoutCustomerInputSchema } from './CustomerTagCreateWithoutCustomerInputSchema';
import { CustomerTagUncheckedCreateWithoutCustomerInputSchema } from './CustomerTagUncheckedCreateWithoutCustomerInputSchema';

export const CustomerTagUpsertWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.CustomerTagUpsertWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => CustomerTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CustomerTagUpdateWithoutCustomerInputSchema),z.lazy(() => CustomerTagUncheckedUpdateWithoutCustomerInputSchema) ]),
  create: z.union([ z.lazy(() => CustomerTagCreateWithoutCustomerInputSchema),z.lazy(() => CustomerTagUncheckedCreateWithoutCustomerInputSchema) ]),
}).strict();

export default CustomerTagUpsertWithWhereUniqueWithoutCustomerInputSchema;
