import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealHistoryWhereUniqueInputSchema } from './DealHistoryWhereUniqueInputSchema';
import { DealHistoryUpdateWithoutDealInputSchema } from './DealHistoryUpdateWithoutDealInputSchema';
import { DealHistoryUncheckedUpdateWithoutDealInputSchema } from './DealHistoryUncheckedUpdateWithoutDealInputSchema';
import { DealHistoryCreateWithoutDealInputSchema } from './DealHistoryCreateWithoutDealInputSchema';
import { DealHistoryUncheckedCreateWithoutDealInputSchema } from './DealHistoryUncheckedCreateWithoutDealInputSchema';

export const DealHistoryUpsertWithWhereUniqueWithoutDealInputSchema: z.ZodType<Prisma.DealHistoryUpsertWithWhereUniqueWithoutDealInput> = z.object({
  where: z.lazy(() => DealHistoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DealHistoryUpdateWithoutDealInputSchema),z.lazy(() => DealHistoryUncheckedUpdateWithoutDealInputSchema) ]),
  create: z.union([ z.lazy(() => DealHistoryCreateWithoutDealInputSchema),z.lazy(() => DealHistoryUncheckedCreateWithoutDealInputSchema) ]),
}).strict();

export default DealHistoryUpsertWithWhereUniqueWithoutDealInputSchema;
