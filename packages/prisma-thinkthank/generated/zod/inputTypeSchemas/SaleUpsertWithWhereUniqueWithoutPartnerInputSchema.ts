import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema';
import { SaleUpdateWithoutPartnerInputSchema } from './SaleUpdateWithoutPartnerInputSchema';
import { SaleUncheckedUpdateWithoutPartnerInputSchema } from './SaleUncheckedUpdateWithoutPartnerInputSchema';
import { SaleCreateWithoutPartnerInputSchema } from './SaleCreateWithoutPartnerInputSchema';
import { SaleUncheckedCreateWithoutPartnerInputSchema } from './SaleUncheckedCreateWithoutPartnerInputSchema';

export const SaleUpsertWithWhereUniqueWithoutPartnerInputSchema: z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutPartnerInput> = z.object({
  where: z.lazy(() => SaleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SaleUpdateWithoutPartnerInputSchema),z.lazy(() => SaleUncheckedUpdateWithoutPartnerInputSchema) ]),
  create: z.union([ z.lazy(() => SaleCreateWithoutPartnerInputSchema),z.lazy(() => SaleUncheckedCreateWithoutPartnerInputSchema) ]),
}).strict();

export default SaleUpsertWithWhereUniqueWithoutPartnerInputSchema;
