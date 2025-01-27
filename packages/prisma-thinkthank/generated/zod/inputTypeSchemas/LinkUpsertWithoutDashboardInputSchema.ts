import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkUpdateWithoutDashboardInputSchema } from './LinkUpdateWithoutDashboardInputSchema';
import { LinkUncheckedUpdateWithoutDashboardInputSchema } from './LinkUncheckedUpdateWithoutDashboardInputSchema';
import { LinkCreateWithoutDashboardInputSchema } from './LinkCreateWithoutDashboardInputSchema';
import { LinkUncheckedCreateWithoutDashboardInputSchema } from './LinkUncheckedCreateWithoutDashboardInputSchema';
import { LinkWhereInputSchema } from './LinkWhereInputSchema';

export const LinkUpsertWithoutDashboardInputSchema: z.ZodType<Prisma.LinkUpsertWithoutDashboardInput> = z.object({
  update: z.union([ z.lazy(() => LinkUpdateWithoutDashboardInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutDashboardInputSchema) ]),
  create: z.union([ z.lazy(() => LinkCreateWithoutDashboardInputSchema),z.lazy(() => LinkUncheckedCreateWithoutDashboardInputSchema) ]),
  where: z.lazy(() => LinkWhereInputSchema).optional()
}).strict();

export default LinkUpsertWithoutDashboardInputSchema;
