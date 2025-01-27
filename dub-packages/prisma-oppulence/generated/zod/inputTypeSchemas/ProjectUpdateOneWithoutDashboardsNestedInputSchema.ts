import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutDashboardsInputSchema } from './ProjectCreateWithoutDashboardsInputSchema';
import { ProjectUncheckedCreateWithoutDashboardsInputSchema } from './ProjectUncheckedCreateWithoutDashboardsInputSchema';
import { ProjectCreateOrConnectWithoutDashboardsInputSchema } from './ProjectCreateOrConnectWithoutDashboardsInputSchema';
import { ProjectUpsertWithoutDashboardsInputSchema } from './ProjectUpsertWithoutDashboardsInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutDashboardsInputSchema } from './ProjectUpdateToOneWithWhereWithoutDashboardsInputSchema';
import { ProjectUpdateWithoutDashboardsInputSchema } from './ProjectUpdateWithoutDashboardsInputSchema';
import { ProjectUncheckedUpdateWithoutDashboardsInputSchema } from './ProjectUncheckedUpdateWithoutDashboardsInputSchema';

export const ProjectUpdateOneWithoutDashboardsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneWithoutDashboardsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutDashboardsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutDashboardsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutDashboardsInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutDashboardsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutDashboardsInputSchema),z.lazy(() => ProjectUpdateWithoutDashboardsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutDashboardsInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneWithoutDashboardsNestedInputSchema;
