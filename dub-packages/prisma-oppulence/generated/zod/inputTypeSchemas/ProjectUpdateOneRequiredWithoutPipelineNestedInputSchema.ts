import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutPipelineInputSchema } from './ProjectCreateWithoutPipelineInputSchema';
import { ProjectUncheckedCreateWithoutPipelineInputSchema } from './ProjectUncheckedCreateWithoutPipelineInputSchema';
import { ProjectCreateOrConnectWithoutPipelineInputSchema } from './ProjectCreateOrConnectWithoutPipelineInputSchema';
import { ProjectUpsertWithoutPipelineInputSchema } from './ProjectUpsertWithoutPipelineInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutPipelineInputSchema } from './ProjectUpdateToOneWithWhereWithoutPipelineInputSchema';
import { ProjectUpdateWithoutPipelineInputSchema } from './ProjectUpdateWithoutPipelineInputSchema';
import { ProjectUncheckedUpdateWithoutPipelineInputSchema } from './ProjectUncheckedUpdateWithoutPipelineInputSchema';

export const ProjectUpdateOneRequiredWithoutPipelineNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutPipelineNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutPipelineInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPipelineInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutPipelineInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutPipelineInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutPipelineInputSchema),z.lazy(() => ProjectUpdateWithoutPipelineInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPipelineInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutPipelineNestedInputSchema;
