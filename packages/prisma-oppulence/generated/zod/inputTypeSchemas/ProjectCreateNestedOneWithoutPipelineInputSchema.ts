import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutPipelineInputSchema } from './ProjectCreateWithoutPipelineInputSchema';
import { ProjectUncheckedCreateWithoutPipelineInputSchema } from './ProjectUncheckedCreateWithoutPipelineInputSchema';
import { ProjectCreateOrConnectWithoutPipelineInputSchema } from './ProjectCreateOrConnectWithoutPipelineInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutPipelineInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutPipelineInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutPipelineInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPipelineInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutPipelineInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutPipelineInputSchema;
