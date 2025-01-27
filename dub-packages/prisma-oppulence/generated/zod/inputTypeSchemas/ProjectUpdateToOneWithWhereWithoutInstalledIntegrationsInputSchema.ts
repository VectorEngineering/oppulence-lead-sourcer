import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutInstalledIntegrationsInputSchema } from './ProjectUpdateWithoutInstalledIntegrationsInputSchema';
import { ProjectUncheckedUpdateWithoutInstalledIntegrationsInputSchema } from './ProjectUncheckedUpdateWithoutInstalledIntegrationsInputSchema';

export const ProjectUpdateToOneWithWhereWithoutInstalledIntegrationsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutInstalledIntegrationsInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutInstalledIntegrationsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutInstalledIntegrationsInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutInstalledIntegrationsInputSchema;
