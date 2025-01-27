import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutLinksInputSchema } from './ProjectUpdateWithoutLinksInputSchema';
import { ProjectUncheckedUpdateWithoutLinksInputSchema } from './ProjectUncheckedUpdateWithoutLinksInputSchema';

export const ProjectUpdateToOneWithWhereWithoutLinksInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutLinksInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutLinksInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutLinksInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutLinksInputSchema;
