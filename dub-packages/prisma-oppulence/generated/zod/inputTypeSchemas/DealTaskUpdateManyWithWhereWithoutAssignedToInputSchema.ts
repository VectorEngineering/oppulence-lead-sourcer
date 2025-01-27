import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealTaskScalarWhereInputSchema } from './DealTaskScalarWhereInputSchema';
import { DealTaskUpdateManyMutationInputSchema } from './DealTaskUpdateManyMutationInputSchema';
import { DealTaskUncheckedUpdateManyWithoutAssignedToInputSchema } from './DealTaskUncheckedUpdateManyWithoutAssignedToInputSchema';

export const DealTaskUpdateManyWithWhereWithoutAssignedToInputSchema: z.ZodType<Prisma.DealTaskUpdateManyWithWhereWithoutAssignedToInput> = z.object({
  where: z.lazy(() => DealTaskScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DealTaskUpdateManyMutationInputSchema),z.lazy(() => DealTaskUncheckedUpdateManyWithoutAssignedToInputSchema) ]),
}).strict();

export default DealTaskUpdateManyWithWhereWithoutAssignedToInputSchema;
