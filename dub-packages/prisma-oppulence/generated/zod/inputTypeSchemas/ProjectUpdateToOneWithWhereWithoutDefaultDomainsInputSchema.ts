import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutDefaultDomainsInputSchema } from './ProjectUpdateWithoutDefaultDomainsInputSchema';
import { ProjectUncheckedUpdateWithoutDefaultDomainsInputSchema } from './ProjectUncheckedUpdateWithoutDefaultDomainsInputSchema';

export const ProjectUpdateToOneWithWhereWithoutDefaultDomainsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutDefaultDomainsInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutDefaultDomainsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutDefaultDomainsInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutDefaultDomainsInputSchema;
