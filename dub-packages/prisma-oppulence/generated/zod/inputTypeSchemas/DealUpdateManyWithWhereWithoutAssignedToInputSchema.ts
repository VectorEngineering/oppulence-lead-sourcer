import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealScalarWhereInputSchema } from './DealScalarWhereInputSchema';
import { DealUpdateManyMutationInputSchema } from './DealUpdateManyMutationInputSchema';
import { DealUncheckedUpdateManyWithoutAssignedToInputSchema } from './DealUncheckedUpdateManyWithoutAssignedToInputSchema';

export const DealUpdateManyWithWhereWithoutAssignedToInputSchema: z.ZodType<Prisma.DealUpdateManyWithWhereWithoutAssignedToInput> = z.object({
  where: z.lazy(() => DealScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DealUpdateManyMutationInputSchema),z.lazy(() => DealUncheckedUpdateManyWithoutAssignedToInputSchema) ]),
}).strict();

export default DealUpdateManyWithWhereWithoutAssignedToInputSchema;
