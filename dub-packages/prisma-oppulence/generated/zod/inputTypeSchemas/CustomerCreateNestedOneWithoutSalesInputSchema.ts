import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutSalesInputSchema } from './CustomerCreateWithoutSalesInputSchema';
import { CustomerUncheckedCreateWithoutSalesInputSchema } from './CustomerUncheckedCreateWithoutSalesInputSchema';
import { CustomerCreateOrConnectWithoutSalesInputSchema } from './CustomerCreateOrConnectWithoutSalesInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';

export const CustomerCreateNestedOneWithoutSalesInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutSalesInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutSalesInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutSalesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutSalesInputSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional()
}).strict();

export default CustomerCreateNestedOneWithoutSalesInputSchema;
