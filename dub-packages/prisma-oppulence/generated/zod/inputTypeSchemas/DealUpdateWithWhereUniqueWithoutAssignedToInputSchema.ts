import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealUpdateWithoutAssignedToInputSchema } from './DealUpdateWithoutAssignedToInputSchema';
import { DealUncheckedUpdateWithoutAssignedToInputSchema } from './DealUncheckedUpdateWithoutAssignedToInputSchema';

export const DealUpdateWithWhereUniqueWithoutAssignedToInputSchema: z.ZodType<Prisma.DealUpdateWithWhereUniqueWithoutAssignedToInput> = z.object({
  where: z.lazy(() => DealWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DealUpdateWithoutAssignedToInputSchema),z.lazy(() => DealUncheckedUpdateWithoutAssignedToInputSchema) ]),
}).strict();

export default DealUpdateWithWhereUniqueWithoutAssignedToInputSchema;
