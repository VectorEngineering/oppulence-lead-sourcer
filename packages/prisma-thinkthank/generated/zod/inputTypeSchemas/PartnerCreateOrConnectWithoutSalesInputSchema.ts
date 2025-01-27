import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema';
import { PartnerCreateWithoutSalesInputSchema } from './PartnerCreateWithoutSalesInputSchema';
import { PartnerUncheckedCreateWithoutSalesInputSchema } from './PartnerUncheckedCreateWithoutSalesInputSchema';

export const PartnerCreateOrConnectWithoutSalesInputSchema: z.ZodType<Prisma.PartnerCreateOrConnectWithoutSalesInput> = z.object({
  where: z.lazy(() => PartnerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PartnerCreateWithoutSalesInputSchema),z.lazy(() => PartnerUncheckedCreateWithoutSalesInputSchema) ]),
}).strict();

export default PartnerCreateOrConnectWithoutSalesInputSchema;
