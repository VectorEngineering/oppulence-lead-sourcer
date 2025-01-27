import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealWhereInputSchema } from './DealWhereInputSchema';
import { DealUpdateWithoutTasksInputSchema } from './DealUpdateWithoutTasksInputSchema';
import { DealUncheckedUpdateWithoutTasksInputSchema } from './DealUncheckedUpdateWithoutTasksInputSchema';

export const DealUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.DealUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => DealWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DealUpdateWithoutTasksInputSchema),z.lazy(() => DealUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export default DealUpdateToOneWithWhereWithoutTasksInputSchema;
