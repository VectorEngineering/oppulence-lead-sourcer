import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { CustomerUpdateWithoutCustomerTagsInputSchema } from './CustomerUpdateWithoutCustomerTagsInputSchema';
import { CustomerUncheckedUpdateWithoutCustomerTagsInputSchema } from './CustomerUncheckedUpdateWithoutCustomerTagsInputSchema';

export const CustomerUpdateToOneWithWhereWithoutCustomerTagsInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutCustomerTagsInput> = z.object({
  where: z.lazy(() => CustomerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CustomerUpdateWithoutCustomerTagsInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutCustomerTagsInputSchema) ]),
}).strict();

export default CustomerUpdateToOneWithWhereWithoutCustomerTagsInputSchema;
