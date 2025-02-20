import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema';
import { SaleUpdateWithoutPayoutInputSchema } from './SaleUpdateWithoutPayoutInputSchema';
import { SaleUncheckedUpdateWithoutPayoutInputSchema } from './SaleUncheckedUpdateWithoutPayoutInputSchema';
import { SaleCreateWithoutPayoutInputSchema } from './SaleCreateWithoutPayoutInputSchema';
import { SaleUncheckedCreateWithoutPayoutInputSchema } from './SaleUncheckedCreateWithoutPayoutInputSchema';

export const SaleUpsertWithWhereUniqueWithoutPayoutInputSchema: z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutPayoutInput> = z.object({
  where: z.lazy(() => SaleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SaleUpdateWithoutPayoutInputSchema),z.lazy(() => SaleUncheckedUpdateWithoutPayoutInputSchema) ]),
  create: z.union([ z.lazy(() => SaleCreateWithoutPayoutInputSchema),z.lazy(() => SaleUncheckedCreateWithoutPayoutInputSchema) ]),
}).strict();

export default SaleUpsertWithWhereUniqueWithoutPayoutInputSchema;
