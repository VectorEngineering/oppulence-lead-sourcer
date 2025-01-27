import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutDomainsInputSchema } from './ProjectCreateWithoutDomainsInputSchema';
import { ProjectUncheckedCreateWithoutDomainsInputSchema } from './ProjectUncheckedCreateWithoutDomainsInputSchema';

export const ProjectCreateOrConnectWithoutDomainsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutDomainsInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutDomainsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutDomainsInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutDomainsInputSchema;
