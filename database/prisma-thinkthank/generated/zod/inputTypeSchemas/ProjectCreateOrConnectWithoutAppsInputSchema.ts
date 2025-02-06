import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutAppsInputSchema } from './ProjectCreateWithoutAppsInputSchema';
import { ProjectUncheckedCreateWithoutAppsInputSchema } from './ProjectUncheckedCreateWithoutAppsInputSchema';

export const ProjectCreateOrConnectWithoutAppsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutAppsInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutAppsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutAppsInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutAppsInputSchema;
