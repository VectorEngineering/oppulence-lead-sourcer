import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealTaskScalarWhereInputSchema } from './DealTaskScalarWhereInputSchema';
import { DealTaskUpdateManyMutationInputSchema } from './DealTaskUpdateManyMutationInputSchema';
import { DealTaskUncheckedUpdateManyWithoutDealInputSchema } from './DealTaskUncheckedUpdateManyWithoutDealInputSchema';

export const DealTaskUpdateManyWithWhereWithoutDealInputSchema: z.ZodType<Prisma.DealTaskUpdateManyWithWhereWithoutDealInput> = z.object({
  where: z.lazy(() => DealTaskScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DealTaskUpdateManyMutationInputSchema),z.lazy(() => DealTaskUncheckedUpdateManyWithoutDealInputSchema) ]),
}).strict();

export default DealTaskUpdateManyWithWhereWithoutDealInputSchema;
