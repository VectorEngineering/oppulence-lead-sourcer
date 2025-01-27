import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUsersSelectSchema } from '../inputTypeSchemas/ProjectUsersSelectSchema';
import { ProjectUsersIncludeSchema } from '../inputTypeSchemas/ProjectUsersIncludeSchema';

export const ProjectUsersArgsSchema: z.ZodType<Prisma.ProjectUsersDefaultArgs> = z.object({
  select: z.lazy(() => ProjectUsersSelectSchema).optional(),
  include: z.lazy(() => ProjectUsersIncludeSchema).optional(),
}).strict();

export default ProjectUsersArgsSchema;
