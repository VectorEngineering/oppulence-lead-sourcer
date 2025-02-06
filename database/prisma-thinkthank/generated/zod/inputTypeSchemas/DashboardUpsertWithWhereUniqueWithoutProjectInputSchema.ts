import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DashboardWhereUniqueInputSchema } from './DashboardWhereUniqueInputSchema';
import { DashboardUpdateWithoutProjectInputSchema } from './DashboardUpdateWithoutProjectInputSchema';
import { DashboardUncheckedUpdateWithoutProjectInputSchema } from './DashboardUncheckedUpdateWithoutProjectInputSchema';
import { DashboardCreateWithoutProjectInputSchema } from './DashboardCreateWithoutProjectInputSchema';
import { DashboardUncheckedCreateWithoutProjectInputSchema } from './DashboardUncheckedCreateWithoutProjectInputSchema';

export const DashboardUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.DashboardUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => DashboardWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DashboardUpdateWithoutProjectInputSchema),z.lazy(() => DashboardUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => DashboardCreateWithoutProjectInputSchema),z.lazy(() => DashboardUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default DashboardUpsertWithWhereUniqueWithoutProjectInputSchema;
