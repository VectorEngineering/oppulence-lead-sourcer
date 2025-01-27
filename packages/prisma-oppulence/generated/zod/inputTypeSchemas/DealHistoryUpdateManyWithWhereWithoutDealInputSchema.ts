import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealHistoryScalarWhereInputSchema } from './DealHistoryScalarWhereInputSchema';
import { DealHistoryUpdateManyMutationInputSchema } from './DealHistoryUpdateManyMutationInputSchema';
import { DealHistoryUncheckedUpdateManyWithoutDealInputSchema } from './DealHistoryUncheckedUpdateManyWithoutDealInputSchema';

export const DealHistoryUpdateManyWithWhereWithoutDealInputSchema: z.ZodType<Prisma.DealHistoryUpdateManyWithWhereWithoutDealInput> = z.object({
  where: z.lazy(() => DealHistoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DealHistoryUpdateManyMutationInputSchema),z.lazy(() => DealHistoryUncheckedUpdateManyWithoutDealInputSchema) ]),
}).strict();

export default DealHistoryUpdateManyWithWhereWithoutDealInputSchema;
