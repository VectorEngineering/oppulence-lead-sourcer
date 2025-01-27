import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealTaskWhereUniqueInputSchema } from './DealTaskWhereUniqueInputSchema';
import { DealTaskUpdateWithoutAssignedToInputSchema } from './DealTaskUpdateWithoutAssignedToInputSchema';
import { DealTaskUncheckedUpdateWithoutAssignedToInputSchema } from './DealTaskUncheckedUpdateWithoutAssignedToInputSchema';

export const DealTaskUpdateWithWhereUniqueWithoutAssignedToInputSchema: z.ZodType<Prisma.DealTaskUpdateWithWhereUniqueWithoutAssignedToInput> = z.object({
  where: z.lazy(() => DealTaskWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DealTaskUpdateWithoutAssignedToInputSchema),z.lazy(() => DealTaskUncheckedUpdateWithoutAssignedToInputSchema) ]),
}).strict();

export default DealTaskUpdateWithWhereUniqueWithoutAssignedToInputSchema;
