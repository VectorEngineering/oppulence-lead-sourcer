import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DashboardWhereUniqueInputSchema } from './DashboardWhereUniqueInputSchema';
import { DashboardCreateWithoutUserInputSchema } from './DashboardCreateWithoutUserInputSchema';
import { DashboardUncheckedCreateWithoutUserInputSchema } from './DashboardUncheckedCreateWithoutUserInputSchema';

export const DashboardCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.DashboardCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => DashboardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DashboardCreateWithoutUserInputSchema),z.lazy(() => DashboardUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default DashboardCreateOrConnectWithoutUserInputSchema;
