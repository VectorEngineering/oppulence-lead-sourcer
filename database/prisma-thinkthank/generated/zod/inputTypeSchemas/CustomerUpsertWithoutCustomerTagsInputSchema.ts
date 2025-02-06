import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerUpdateWithoutCustomerTagsInputSchema } from './CustomerUpdateWithoutCustomerTagsInputSchema';
import { CustomerUncheckedUpdateWithoutCustomerTagsInputSchema } from './CustomerUncheckedUpdateWithoutCustomerTagsInputSchema';
import { CustomerCreateWithoutCustomerTagsInputSchema } from './CustomerCreateWithoutCustomerTagsInputSchema';
import { CustomerUncheckedCreateWithoutCustomerTagsInputSchema } from './CustomerUncheckedCreateWithoutCustomerTagsInputSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';

export const CustomerUpsertWithoutCustomerTagsInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutCustomerTagsInput> = z.object({
  update: z.union([ z.lazy(() => CustomerUpdateWithoutCustomerTagsInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutCustomerTagsInputSchema) ]),
  create: z.union([ z.lazy(() => CustomerCreateWithoutCustomerTagsInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutCustomerTagsInputSchema) ]),
  where: z.lazy(() => CustomerWhereInputSchema).optional()
}).strict();

export default CustomerUpsertWithoutCustomerTagsInputSchema;
