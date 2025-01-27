import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleScalarWhereInputSchema } from './SaleScalarWhereInputSchema';
import { SaleUpdateManyMutationInputSchema } from './SaleUpdateManyMutationInputSchema';
import { SaleUncheckedUpdateManyWithoutCustomerInputSchema } from './SaleUncheckedUpdateManyWithoutCustomerInputSchema';

export const SaleUpdateManyWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.SaleUpdateManyWithWhereWithoutCustomerInput> = z.object({
  where: z.lazy(() => SaleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SaleUpdateManyMutationInputSchema),z.lazy(() => SaleUncheckedUpdateManyWithoutCustomerInputSchema) ]),
}).strict();

export default SaleUpdateManyWithWhereWithoutCustomerInputSchema;
