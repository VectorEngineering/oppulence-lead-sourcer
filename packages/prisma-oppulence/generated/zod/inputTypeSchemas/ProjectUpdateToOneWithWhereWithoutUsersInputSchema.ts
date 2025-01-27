import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutUsersInputSchema } from './ProjectUpdateWithoutUsersInputSchema';
import { ProjectUncheckedUpdateWithoutUsersInputSchema } from './ProjectUncheckedUpdateWithoutUsersInputSchema';

export const ProjectUpdateToOneWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutUsersInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutUsersInputSchema;
