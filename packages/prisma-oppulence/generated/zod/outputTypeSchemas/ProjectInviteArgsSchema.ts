import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectInviteSelectSchema } from '../inputTypeSchemas/ProjectInviteSelectSchema';
import { ProjectInviteIncludeSchema } from '../inputTypeSchemas/ProjectInviteIncludeSchema';

export const ProjectInviteArgsSchema: z.ZodType<Prisma.ProjectInviteDefaultArgs> = z.object({
  select: z.lazy(() => ProjectInviteSelectSchema).optional(),
  include: z.lazy(() => ProjectInviteIncludeSchema).optional(),
}).strict();

export default ProjectInviteArgsSchema;
