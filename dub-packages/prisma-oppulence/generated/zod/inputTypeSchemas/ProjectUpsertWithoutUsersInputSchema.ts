import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutUsersInputSchema } from './ProjectUpdateWithoutUsersInputSchema';
import { ProjectUncheckedUpdateWithoutUsersInputSchema } from './ProjectUncheckedUpdateWithoutUsersInputSchema';
import { ProjectCreateWithoutUsersInputSchema } from './ProjectCreateWithoutUsersInputSchema';
import { ProjectUncheckedCreateWithoutUsersInputSchema } from './ProjectUncheckedCreateWithoutUsersInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutUsersInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutUsersInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutUsersInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutUsersInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutUsersInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutUsersInputSchema;
