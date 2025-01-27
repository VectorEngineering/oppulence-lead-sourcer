import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerTagScalarWhereInputSchema } from './CustomerTagScalarWhereInputSchema';
import { CustomerTagUpdateManyMutationInputSchema } from './CustomerTagUpdateManyMutationInputSchema';
import { CustomerTagUncheckedUpdateManyWithoutCustomerInputSchema } from './CustomerTagUncheckedUpdateManyWithoutCustomerInputSchema';

export const CustomerTagUpdateManyWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.CustomerTagUpdateManyWithWhereWithoutCustomerInput> = z.object({
  where: z.lazy(() => CustomerTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CustomerTagUpdateManyMutationInputSchema),z.lazy(() => CustomerTagUncheckedUpdateManyWithoutCustomerInputSchema) ]),
}).strict();

export default CustomerTagUpdateManyWithWhereWithoutCustomerInputSchema;
