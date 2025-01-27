import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUsersScalarWhereInputSchema } from './ProjectUsersScalarWhereInputSchema';
import { ProjectUsersUpdateManyMutationInputSchema } from './ProjectUsersUpdateManyMutationInputSchema';
import { ProjectUsersUncheckedUpdateManyWithoutUserInputSchema } from './ProjectUsersUncheckedUpdateManyWithoutUserInputSchema';

export const ProjectUsersUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ProjectUsersUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ProjectUsersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectUsersUpdateManyMutationInputSchema),z.lazy(() => ProjectUsersUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default ProjectUsersUpdateManyWithWhereWithoutUserInputSchema;
