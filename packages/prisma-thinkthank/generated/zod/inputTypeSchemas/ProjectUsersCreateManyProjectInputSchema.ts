import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const ProjectUsersCreateManyProjectInputSchema: z.ZodType<Prisma.ProjectUsersCreateManyProjectInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export default ProjectUsersCreateManyProjectInputSchema;
