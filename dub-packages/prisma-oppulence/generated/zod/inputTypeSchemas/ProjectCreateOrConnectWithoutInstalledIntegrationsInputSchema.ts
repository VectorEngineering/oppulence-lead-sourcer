import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutInstalledIntegrationsInputSchema } from './ProjectCreateWithoutInstalledIntegrationsInputSchema';
import { ProjectUncheckedCreateWithoutInstalledIntegrationsInputSchema } from './ProjectUncheckedCreateWithoutInstalledIntegrationsInputSchema';

export const ProjectCreateOrConnectWithoutInstalledIntegrationsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutInstalledIntegrationsInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutInstalledIntegrationsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutInstalledIntegrationsInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutInstalledIntegrationsInputSchema;
