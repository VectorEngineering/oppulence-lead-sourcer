import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutUsersInputSchema } from './ProjectCreateWithoutUsersInputSchema';
import { ProjectUncheckedCreateWithoutUsersInputSchema } from './ProjectUncheckedCreateWithoutUsersInputSchema';
import { ProjectCreateOrConnectWithoutUsersInputSchema } from './ProjectCreateOrConnectWithoutUsersInputSchema';
import { ProjectUpsertWithoutUsersInputSchema } from './ProjectUpsertWithoutUsersInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutUsersInputSchema } from './ProjectUpdateToOneWithWhereWithoutUsersInputSchema';
import { ProjectUpdateWithoutUsersInputSchema } from './ProjectUpdateWithoutUsersInputSchema';
import { ProjectUncheckedUpdateWithoutUsersInputSchema } from './ProjectUncheckedUpdateWithoutUsersInputSchema';

export const ProjectUpdateOneRequiredWithoutUsersNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutUsersInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutUsersInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutUsersInputSchema),z.lazy(() => ProjectUpdateWithoutUsersInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutUsersInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutUsersNestedInputSchema;
