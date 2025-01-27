import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const ProjectInviteCreateManyInputSchema: z.ZodType<Prisma.ProjectInviteCreateManyInput> = z.object({
  email: z.string(),
  expires: z.coerce.date(),
  projectId: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export default ProjectInviteCreateManyInputSchema;
