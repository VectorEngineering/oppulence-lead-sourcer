import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealActivityWhereUniqueInputSchema } from './DealActivityWhereUniqueInputSchema';
import { DealActivityUpdateWithoutDealInputSchema } from './DealActivityUpdateWithoutDealInputSchema';
import { DealActivityUncheckedUpdateWithoutDealInputSchema } from './DealActivityUncheckedUpdateWithoutDealInputSchema';

export const DealActivityUpdateWithWhereUniqueWithoutDealInputSchema: z.ZodType<Prisma.DealActivityUpdateWithWhereUniqueWithoutDealInput> = z.object({
  where: z.lazy(() => DealActivityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DealActivityUpdateWithoutDealInputSchema),z.lazy(() => DealActivityUncheckedUpdateWithoutDealInputSchema) ]),
}).strict();

export default DealActivityUpdateWithWhereUniqueWithoutDealInputSchema;
