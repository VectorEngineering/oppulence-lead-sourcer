import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutSalesInputSchema } from './CustomerCreateWithoutSalesInputSchema';
import { CustomerUncheckedCreateWithoutSalesInputSchema } from './CustomerUncheckedCreateWithoutSalesInputSchema';
import { CustomerCreateOrConnectWithoutSalesInputSchema } from './CustomerCreateOrConnectWithoutSalesInputSchema';
import { CustomerUpsertWithoutSalesInputSchema } from './CustomerUpsertWithoutSalesInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateToOneWithWhereWithoutSalesInputSchema } from './CustomerUpdateToOneWithWhereWithoutSalesInputSchema';
import { CustomerUpdateWithoutSalesInputSchema } from './CustomerUpdateWithoutSalesInputSchema';
import { CustomerUncheckedUpdateWithoutSalesInputSchema } from './CustomerUncheckedUpdateWithoutSalesInputSchema';

export const CustomerUpdateOneRequiredWithoutSalesNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutSalesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutSalesInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutSalesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutSalesInputSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutSalesInputSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CustomerUpdateToOneWithWhereWithoutSalesInputSchema),z.lazy(() => CustomerUpdateWithoutSalesInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutSalesInputSchema) ]).optional(),
}).strict();

export default CustomerUpdateOneRequiredWithoutSalesNestedInputSchema;
