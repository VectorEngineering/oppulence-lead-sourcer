import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUsersWhereUniqueInputSchema } from './ProjectUsersWhereUniqueInputSchema';
import { ProjectUsersCreateWithoutUserInputSchema } from './ProjectUsersCreateWithoutUserInputSchema';
import { ProjectUsersUncheckedCreateWithoutUserInputSchema } from './ProjectUsersUncheckedCreateWithoutUserInputSchema';

export const ProjectUsersCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ProjectUsersCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ProjectUsersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectUsersCreateWithoutUserInputSchema),z.lazy(() => ProjectUsersUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default ProjectUsersCreateOrConnectWithoutUserInputSchema;
