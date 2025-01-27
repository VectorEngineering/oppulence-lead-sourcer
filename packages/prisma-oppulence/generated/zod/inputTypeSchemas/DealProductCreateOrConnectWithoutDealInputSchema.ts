import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealProductWhereUniqueInputSchema } from './DealProductWhereUniqueInputSchema';
import { DealProductCreateWithoutDealInputSchema } from './DealProductCreateWithoutDealInputSchema';
import { DealProductUncheckedCreateWithoutDealInputSchema } from './DealProductUncheckedCreateWithoutDealInputSchema';

export const DealProductCreateOrConnectWithoutDealInputSchema: z.ZodType<Prisma.DealProductCreateOrConnectWithoutDealInput> = z.object({
  where: z.lazy(() => DealProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DealProductCreateWithoutDealInputSchema),z.lazy(() => DealProductUncheckedCreateWithoutDealInputSchema) ]),
}).strict();

export default DealProductCreateOrConnectWithoutDealInputSchema;
