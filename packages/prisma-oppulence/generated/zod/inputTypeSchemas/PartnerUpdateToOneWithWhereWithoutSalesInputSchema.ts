import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema';
import { PartnerUpdateWithoutSalesInputSchema } from './PartnerUpdateWithoutSalesInputSchema';
import { PartnerUncheckedUpdateWithoutSalesInputSchema } from './PartnerUncheckedUpdateWithoutSalesInputSchema';

export const PartnerUpdateToOneWithWhereWithoutSalesInputSchema: z.ZodType<Prisma.PartnerUpdateToOneWithWhereWithoutSalesInput> = z.object({
  where: z.lazy(() => PartnerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PartnerUpdateWithoutSalesInputSchema),z.lazy(() => PartnerUncheckedUpdateWithoutSalesInputSchema) ]),
}).strict();

export default PartnerUpdateToOneWithWhereWithoutSalesInputSchema;
