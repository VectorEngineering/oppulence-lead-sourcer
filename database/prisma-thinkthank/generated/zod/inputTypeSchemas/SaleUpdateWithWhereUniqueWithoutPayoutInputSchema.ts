import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema';
import { SaleUpdateWithoutPayoutInputSchema } from './SaleUpdateWithoutPayoutInputSchema';
import { SaleUncheckedUpdateWithoutPayoutInputSchema } from './SaleUncheckedUpdateWithoutPayoutInputSchema';

export const SaleUpdateWithWhereUniqueWithoutPayoutInputSchema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutPayoutInput> = z.object({
  where: z.lazy(() => SaleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SaleUpdateWithoutPayoutInputSchema),z.lazy(() => SaleUncheckedUpdateWithoutPayoutInputSchema) ]),
}).strict();

export default SaleUpdateWithWhereUniqueWithoutPayoutInputSchema;
