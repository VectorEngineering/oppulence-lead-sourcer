import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema';
import { SaleUpdateWithoutCustomerInputSchema } from './SaleUpdateWithoutCustomerInputSchema';
import { SaleUncheckedUpdateWithoutCustomerInputSchema } from './SaleUncheckedUpdateWithoutCustomerInputSchema';

export const SaleUpdateWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => SaleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SaleUpdateWithoutCustomerInputSchema),z.lazy(() => SaleUncheckedUpdateWithoutCustomerInputSchema) ]),
}).strict();

export default SaleUpdateWithWhereUniqueWithoutCustomerInputSchema;
