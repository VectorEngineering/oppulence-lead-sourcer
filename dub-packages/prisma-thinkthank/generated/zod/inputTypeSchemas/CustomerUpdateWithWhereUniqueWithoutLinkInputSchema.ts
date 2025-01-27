import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateWithoutLinkInputSchema } from './CustomerUpdateWithoutLinkInputSchema';
import { CustomerUncheckedUpdateWithoutLinkInputSchema } from './CustomerUncheckedUpdateWithoutLinkInputSchema';

export const CustomerUpdateWithWhereUniqueWithoutLinkInputSchema: z.ZodType<Prisma.CustomerUpdateWithWhereUniqueWithoutLinkInput> = z.object({
  where: z.lazy(() => CustomerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CustomerUpdateWithoutLinkInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutLinkInputSchema) ]),
}).strict();

export default CustomerUpdateWithWhereUniqueWithoutLinkInputSchema;
