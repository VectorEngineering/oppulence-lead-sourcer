import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DashboardWhereUniqueInputSchema } from './DashboardWhereUniqueInputSchema';
import { DashboardCreateWithoutLinkInputSchema } from './DashboardCreateWithoutLinkInputSchema';
import { DashboardUncheckedCreateWithoutLinkInputSchema } from './DashboardUncheckedCreateWithoutLinkInputSchema';

export const DashboardCreateOrConnectWithoutLinkInputSchema: z.ZodType<Prisma.DashboardCreateOrConnectWithoutLinkInput> = z.object({
  where: z.lazy(() => DashboardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DashboardCreateWithoutLinkInputSchema),z.lazy(() => DashboardUncheckedCreateWithoutLinkInputSchema) ]),
}).strict();

export default DashboardCreateOrConnectWithoutLinkInputSchema;
