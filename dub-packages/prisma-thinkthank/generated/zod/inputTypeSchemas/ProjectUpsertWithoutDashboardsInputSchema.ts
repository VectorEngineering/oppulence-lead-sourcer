import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutDashboardsInputSchema } from './ProjectUpdateWithoutDashboardsInputSchema';
import { ProjectUncheckedUpdateWithoutDashboardsInputSchema } from './ProjectUncheckedUpdateWithoutDashboardsInputSchema';
import { ProjectCreateWithoutDashboardsInputSchema } from './ProjectCreateWithoutDashboardsInputSchema';
import { ProjectUncheckedCreateWithoutDashboardsInputSchema } from './ProjectUncheckedCreateWithoutDashboardsInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutDashboardsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutDashboardsInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutDashboardsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutDashboardsInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutDashboardsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutDashboardsInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutDashboardsInputSchema;
