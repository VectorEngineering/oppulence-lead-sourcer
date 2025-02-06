import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUsersWhereUniqueInputSchema } from './ProjectUsersWhereUniqueInputSchema';
import { ProjectUsersUpdateWithoutUserInputSchema } from './ProjectUsersUpdateWithoutUserInputSchema';
import { ProjectUsersUncheckedUpdateWithoutUserInputSchema } from './ProjectUsersUncheckedUpdateWithoutUserInputSchema';

export const ProjectUsersUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ProjectUsersUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ProjectUsersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectUsersUpdateWithoutUserInputSchema),z.lazy(() => ProjectUsersUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default ProjectUsersUpdateWithWhereUniqueWithoutUserInputSchema;
