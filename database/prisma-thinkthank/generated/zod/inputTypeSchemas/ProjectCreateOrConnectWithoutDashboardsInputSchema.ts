import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutDashboardsInputSchema } from './ProjectCreateWithoutDashboardsInputSchema';
import { ProjectUncheckedCreateWithoutDashboardsInputSchema } from './ProjectUncheckedCreateWithoutDashboardsInputSchema';

export const ProjectCreateOrConnectWithoutDashboardsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutDashboardsInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutDashboardsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutDashboardsInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutDashboardsInputSchema;
