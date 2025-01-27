import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema';
import { CustomerTagUpdateWithoutTagInputSchema } from './CustomerTagUpdateWithoutTagInputSchema';
import { CustomerTagUncheckedUpdateWithoutTagInputSchema } from './CustomerTagUncheckedUpdateWithoutTagInputSchema';

export const CustomerTagUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.CustomerTagUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => CustomerTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CustomerTagUpdateWithoutTagInputSchema),z.lazy(() => CustomerTagUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default CustomerTagUpdateWithWhereUniqueWithoutTagInputSchema;
