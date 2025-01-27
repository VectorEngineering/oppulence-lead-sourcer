import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DashboardScalarWhereInputSchema } from './DashboardScalarWhereInputSchema';
import { DashboardUpdateManyMutationInputSchema } from './DashboardUpdateManyMutationInputSchema';
import { DashboardUncheckedUpdateManyWithoutUserInputSchema } from './DashboardUncheckedUpdateManyWithoutUserInputSchema';

export const DashboardUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.DashboardUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => DashboardScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DashboardUpdateManyMutationInputSchema),z.lazy(() => DashboardUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default DashboardUpdateManyWithWhereWithoutUserInputSchema;
