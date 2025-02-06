import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerCreateWithoutSalesInputSchema } from './PartnerCreateWithoutSalesInputSchema';
import { PartnerUncheckedCreateWithoutSalesInputSchema } from './PartnerUncheckedCreateWithoutSalesInputSchema';
import { PartnerCreateOrConnectWithoutSalesInputSchema } from './PartnerCreateOrConnectWithoutSalesInputSchema';
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema';

export const PartnerCreateNestedOneWithoutSalesInputSchema: z.ZodType<Prisma.PartnerCreateNestedOneWithoutSalesInput> = z.object({
  create: z.union([ z.lazy(() => PartnerCreateWithoutSalesInputSchema),z.lazy(() => PartnerUncheckedCreateWithoutSalesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PartnerCreateOrConnectWithoutSalesInputSchema).optional(),
  connect: z.lazy(() => PartnerWhereUniqueInputSchema).optional()
}).strict();

export default PartnerCreateNestedOneWithoutSalesInputSchema;
