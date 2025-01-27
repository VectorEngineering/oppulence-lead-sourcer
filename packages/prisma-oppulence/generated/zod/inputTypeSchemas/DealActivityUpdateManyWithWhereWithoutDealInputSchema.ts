import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealActivityScalarWhereInputSchema } from './DealActivityScalarWhereInputSchema';
import { DealActivityUpdateManyMutationInputSchema } from './DealActivityUpdateManyMutationInputSchema';
import { DealActivityUncheckedUpdateManyWithoutDealInputSchema } from './DealActivityUncheckedUpdateManyWithoutDealInputSchema';

export const DealActivityUpdateManyWithWhereWithoutDealInputSchema: z.ZodType<Prisma.DealActivityUpdateManyWithWhereWithoutDealInput> = z.object({
  where: z.lazy(() => DealActivityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DealActivityUpdateManyMutationInputSchema),z.lazy(() => DealActivityUncheckedUpdateManyWithoutDealInputSchema) ]),
}).strict();

export default DealActivityUpdateManyWithWhereWithoutDealInputSchema;
