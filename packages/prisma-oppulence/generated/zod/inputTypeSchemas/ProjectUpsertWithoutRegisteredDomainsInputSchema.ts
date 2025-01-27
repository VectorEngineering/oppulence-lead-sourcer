import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutRegisteredDomainsInputSchema } from './ProjectUpdateWithoutRegisteredDomainsInputSchema';
import { ProjectUncheckedUpdateWithoutRegisteredDomainsInputSchema } from './ProjectUncheckedUpdateWithoutRegisteredDomainsInputSchema';
import { ProjectCreateWithoutRegisteredDomainsInputSchema } from './ProjectCreateWithoutRegisteredDomainsInputSchema';
import { ProjectUncheckedCreateWithoutRegisteredDomainsInputSchema } from './ProjectUncheckedCreateWithoutRegisteredDomainsInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutRegisteredDomainsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutRegisteredDomainsInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutRegisteredDomainsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutRegisteredDomainsInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutRegisteredDomainsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutRegisteredDomainsInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutRegisteredDomainsInputSchema;
