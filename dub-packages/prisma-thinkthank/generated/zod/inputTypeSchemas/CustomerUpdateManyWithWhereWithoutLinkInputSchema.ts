import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerScalarWhereInputSchema } from './CustomerScalarWhereInputSchema';
import { CustomerUpdateManyMutationInputSchema } from './CustomerUpdateManyMutationInputSchema';
import { CustomerUncheckedUpdateManyWithoutLinkInputSchema } from './CustomerUncheckedUpdateManyWithoutLinkInputSchema';

export const CustomerUpdateManyWithWhereWithoutLinkInputSchema: z.ZodType<Prisma.CustomerUpdateManyWithWhereWithoutLinkInput> = z.object({
  where: z.lazy(() => CustomerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CustomerUpdateManyMutationInputSchema),z.lazy(() => CustomerUncheckedUpdateManyWithoutLinkInputSchema) ]),
}).strict();

export default CustomerUpdateManyWithWhereWithoutLinkInputSchema;
