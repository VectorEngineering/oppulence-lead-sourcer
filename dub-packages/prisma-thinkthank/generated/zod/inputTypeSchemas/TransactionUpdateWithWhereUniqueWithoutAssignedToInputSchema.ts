import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionUpdateWithoutAssignedToInputSchema } from './TransactionUpdateWithoutAssignedToInputSchema';
import { TransactionUncheckedUpdateWithoutAssignedToInputSchema } from './TransactionUncheckedUpdateWithoutAssignedToInputSchema';

export const TransactionUpdateWithWhereUniqueWithoutAssignedToInputSchema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutAssignedToInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TransactionUpdateWithoutAssignedToInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutAssignedToInputSchema) ]),
}).strict();

export default TransactionUpdateWithWhereUniqueWithoutAssignedToInputSchema;
