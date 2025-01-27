import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerUpdateWithoutSalesInputSchema } from './CustomerUpdateWithoutSalesInputSchema';
import { CustomerUncheckedUpdateWithoutSalesInputSchema } from './CustomerUncheckedUpdateWithoutSalesInputSchema';
import { CustomerCreateWithoutSalesInputSchema } from './CustomerCreateWithoutSalesInputSchema';
import { CustomerUncheckedCreateWithoutSalesInputSchema } from './CustomerUncheckedCreateWithoutSalesInputSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';

export const CustomerUpsertWithoutSalesInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutSalesInput> = z.object({
  update: z.union([ z.lazy(() => CustomerUpdateWithoutSalesInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutSalesInputSchema) ]),
  create: z.union([ z.lazy(() => CustomerCreateWithoutSalesInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutSalesInputSchema) ]),
  where: z.lazy(() => CustomerWhereInputSchema).optional()
}).strict();

export default CustomerUpsertWithoutSalesInputSchema;
