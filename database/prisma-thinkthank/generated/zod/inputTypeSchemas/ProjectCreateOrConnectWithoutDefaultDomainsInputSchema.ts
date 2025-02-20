import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutDefaultDomainsInputSchema } from './ProjectCreateWithoutDefaultDomainsInputSchema';
import { ProjectUncheckedCreateWithoutDefaultDomainsInputSchema } from './ProjectUncheckedCreateWithoutDefaultDomainsInputSchema';

export const ProjectCreateOrConnectWithoutDefaultDomainsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutDefaultDomainsInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutDefaultDomainsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutDefaultDomainsInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutDefaultDomainsInputSchema;
