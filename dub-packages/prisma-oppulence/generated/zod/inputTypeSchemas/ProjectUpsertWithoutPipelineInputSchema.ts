import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutPipelineInputSchema } from './ProjectUpdateWithoutPipelineInputSchema';
import { ProjectUncheckedUpdateWithoutPipelineInputSchema } from './ProjectUncheckedUpdateWithoutPipelineInputSchema';
import { ProjectCreateWithoutPipelineInputSchema } from './ProjectCreateWithoutPipelineInputSchema';
import { ProjectUncheckedCreateWithoutPipelineInputSchema } from './ProjectUncheckedCreateWithoutPipelineInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutPipelineInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutPipelineInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutPipelineInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPipelineInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutPipelineInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPipelineInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutPipelineInputSchema;
