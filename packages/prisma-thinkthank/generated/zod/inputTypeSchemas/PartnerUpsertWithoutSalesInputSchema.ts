import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerUpdateWithoutSalesInputSchema } from './PartnerUpdateWithoutSalesInputSchema';
import { PartnerUncheckedUpdateWithoutSalesInputSchema } from './PartnerUncheckedUpdateWithoutSalesInputSchema';
import { PartnerCreateWithoutSalesInputSchema } from './PartnerCreateWithoutSalesInputSchema';
import { PartnerUncheckedCreateWithoutSalesInputSchema } from './PartnerUncheckedCreateWithoutSalesInputSchema';
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema';

export const PartnerUpsertWithoutSalesInputSchema: z.ZodType<Prisma.PartnerUpsertWithoutSalesInput> = z.object({
  update: z.union([ z.lazy(() => PartnerUpdateWithoutSalesInputSchema),z.lazy(() => PartnerUncheckedUpdateWithoutSalesInputSchema) ]),
  create: z.union([ z.lazy(() => PartnerCreateWithoutSalesInputSchema),z.lazy(() => PartnerUncheckedCreateWithoutSalesInputSchema) ]),
  where: z.lazy(() => PartnerWhereInputSchema).optional()
}).strict();

export default PartnerUpsertWithoutSalesInputSchema;
