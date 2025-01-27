import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DashboardUpdateWithoutLinkInputSchema } from './DashboardUpdateWithoutLinkInputSchema';
import { DashboardUncheckedUpdateWithoutLinkInputSchema } from './DashboardUncheckedUpdateWithoutLinkInputSchema';
import { DashboardCreateWithoutLinkInputSchema } from './DashboardCreateWithoutLinkInputSchema';
import { DashboardUncheckedCreateWithoutLinkInputSchema } from './DashboardUncheckedCreateWithoutLinkInputSchema';
import { DashboardWhereInputSchema } from './DashboardWhereInputSchema';

export const DashboardUpsertWithoutLinkInputSchema: z.ZodType<Prisma.DashboardUpsertWithoutLinkInput> = z.object({
  update: z.union([ z.lazy(() => DashboardUpdateWithoutLinkInputSchema),z.lazy(() => DashboardUncheckedUpdateWithoutLinkInputSchema) ]),
  create: z.union([ z.lazy(() => DashboardCreateWithoutLinkInputSchema),z.lazy(() => DashboardUncheckedCreateWithoutLinkInputSchema) ]),
  where: z.lazy(() => DashboardWhereInputSchema).optional()
}).strict();

export default DashboardUpsertWithoutLinkInputSchema;
