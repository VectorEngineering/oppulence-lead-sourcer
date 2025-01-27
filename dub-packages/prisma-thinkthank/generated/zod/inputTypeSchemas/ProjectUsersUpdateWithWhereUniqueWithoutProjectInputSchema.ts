import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUsersWhereUniqueInputSchema } from './ProjectUsersWhereUniqueInputSchema';
import { ProjectUsersUpdateWithoutProjectInputSchema } from './ProjectUsersUpdateWithoutProjectInputSchema';
import { ProjectUsersUncheckedUpdateWithoutProjectInputSchema } from './ProjectUsersUncheckedUpdateWithoutProjectInputSchema';

export const ProjectUsersUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ProjectUsersUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectUsersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectUsersUpdateWithoutProjectInputSchema),z.lazy(() => ProjectUsersUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default ProjectUsersUpdateWithWhereUniqueWithoutProjectInputSchema;
