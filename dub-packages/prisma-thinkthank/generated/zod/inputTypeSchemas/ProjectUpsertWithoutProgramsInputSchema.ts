import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutProgramsInputSchema } from './ProjectUpdateWithoutProgramsInputSchema';
import { ProjectUncheckedUpdateWithoutProgramsInputSchema } from './ProjectUncheckedUpdateWithoutProgramsInputSchema';
import { ProjectCreateWithoutProgramsInputSchema } from './ProjectCreateWithoutProgramsInputSchema';
import { ProjectUncheckedCreateWithoutProgramsInputSchema } from './ProjectUncheckedCreateWithoutProgramsInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutProgramsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutProgramsInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutProgramsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutProgramsInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutProgramsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutProgramsInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutProgramsInputSchema;
