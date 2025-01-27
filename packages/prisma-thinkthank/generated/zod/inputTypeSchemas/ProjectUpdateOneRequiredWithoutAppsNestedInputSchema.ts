import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutAppsInputSchema } from './ProjectCreateWithoutAppsInputSchema';
import { ProjectUncheckedCreateWithoutAppsInputSchema } from './ProjectUncheckedCreateWithoutAppsInputSchema';
import { ProjectCreateOrConnectWithoutAppsInputSchema } from './ProjectCreateOrConnectWithoutAppsInputSchema';
import { ProjectUpsertWithoutAppsInputSchema } from './ProjectUpsertWithoutAppsInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutAppsInputSchema } from './ProjectUpdateToOneWithWhereWithoutAppsInputSchema';
import { ProjectUpdateWithoutAppsInputSchema } from './ProjectUpdateWithoutAppsInputSchema';
import { ProjectUncheckedUpdateWithoutAppsInputSchema } from './ProjectUncheckedUpdateWithoutAppsInputSchema';

export const ProjectUpdateOneRequiredWithoutAppsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutAppsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutAppsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutAppsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutAppsInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutAppsInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutAppsInputSchema),z.lazy(() => ProjectUpdateWithoutAppsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutAppsInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutAppsNestedInputSchema;
