import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealProductScalarWhereInputSchema } from './DealProductScalarWhereInputSchema';
import { DealProductUpdateManyMutationInputSchema } from './DealProductUpdateManyMutationInputSchema';
import { DealProductUncheckedUpdateManyWithoutDealInputSchema } from './DealProductUncheckedUpdateManyWithoutDealInputSchema';

export const DealProductUpdateManyWithWhereWithoutDealInputSchema: z.ZodType<Prisma.DealProductUpdateManyWithWhereWithoutDealInput> = z.object({
  where: z.lazy(() => DealProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DealProductUpdateManyMutationInputSchema),z.lazy(() => DealProductUncheckedUpdateManyWithoutDealInputSchema) ]),
}).strict();

export default DealProductUpdateManyWithWhereWithoutDealInputSchema;
