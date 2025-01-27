import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const ProjectUsersCreateManyUserInputSchema: z.ZodType<Prisma.ProjectUsersCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  projectId: z.string()
}).strict();

export default ProjectUsersCreateManyUserInputSchema;
