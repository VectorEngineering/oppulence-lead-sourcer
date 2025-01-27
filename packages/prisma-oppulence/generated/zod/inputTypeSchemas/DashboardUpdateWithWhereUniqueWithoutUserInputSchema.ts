import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DashboardWhereUniqueInputSchema } from './DashboardWhereUniqueInputSchema';
import { DashboardUpdateWithoutUserInputSchema } from './DashboardUpdateWithoutUserInputSchema';
import { DashboardUncheckedUpdateWithoutUserInputSchema } from './DashboardUncheckedUpdateWithoutUserInputSchema';

export const DashboardUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.DashboardUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => DashboardWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DashboardUpdateWithoutUserInputSchema),z.lazy(() => DashboardUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default DashboardUpdateWithWhereUniqueWithoutUserInputSchema;
