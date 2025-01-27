import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealTaskWhereUniqueInputSchema } from './DealTaskWhereUniqueInputSchema';
import { DealTaskUpdateWithoutDealInputSchema } from './DealTaskUpdateWithoutDealInputSchema';
import { DealTaskUncheckedUpdateWithoutDealInputSchema } from './DealTaskUncheckedUpdateWithoutDealInputSchema';

export const DealTaskUpdateWithWhereUniqueWithoutDealInputSchema: z.ZodType<Prisma.DealTaskUpdateWithWhereUniqueWithoutDealInput> = z.object({
  where: z.lazy(() => DealTaskWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DealTaskUpdateWithoutDealInputSchema),z.lazy(() => DealTaskUncheckedUpdateWithoutDealInputSchema) ]),
}).strict();

export default DealTaskUpdateWithWhereUniqueWithoutDealInputSchema;
