import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutProgramsInputSchema } from './ProjectCreateWithoutProgramsInputSchema';
import { ProjectUncheckedCreateWithoutProgramsInputSchema } from './ProjectUncheckedCreateWithoutProgramsInputSchema';

export const ProjectCreateOrConnectWithoutProgramsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutProgramsInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutProgramsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutProgramsInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutProgramsInputSchema;
