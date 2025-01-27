import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutAppsInputSchema } from './ProjectUpdateWithoutAppsInputSchema';
import { ProjectUncheckedUpdateWithoutAppsInputSchema } from './ProjectUncheckedUpdateWithoutAppsInputSchema';

export const ProjectUpdateToOneWithWhereWithoutAppsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutAppsInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutAppsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutAppsInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutAppsInputSchema;
