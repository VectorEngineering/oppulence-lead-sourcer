import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionScalarWhereInputSchema } from './TransactionScalarWhereInputSchema';
import { TransactionUpdateManyMutationInputSchema } from './TransactionUpdateManyMutationInputSchema';
import { TransactionUncheckedUpdateManyWithoutAssignedToInputSchema } from './TransactionUncheckedUpdateManyWithoutAssignedToInputSchema';

export const TransactionUpdateManyWithWhereWithoutAssignedToInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutAssignedToInput> = z.object({
  where: z.lazy(() => TransactionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TransactionUpdateManyMutationInputSchema),z.lazy(() => TransactionUncheckedUpdateManyWithoutAssignedToInputSchema) ]),
}).strict();

export default TransactionUpdateManyWithWhereWithoutAssignedToInputSchema;
