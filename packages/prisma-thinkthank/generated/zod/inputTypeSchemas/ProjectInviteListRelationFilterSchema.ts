import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectInviteWhereInputSchema } from './ProjectInviteWhereInputSchema';

export const ProjectInviteListRelationFilterSchema: z.ZodType<Prisma.ProjectInviteListRelationFilter> = z.object({
  every: z.lazy(() => ProjectInviteWhereInputSchema).optional(),
  some: z.lazy(() => ProjectInviteWhereInputSchema).optional(),
  none: z.lazy(() => ProjectInviteWhereInputSchema).optional()
}).strict();

export default ProjectInviteListRelationFilterSchema;
