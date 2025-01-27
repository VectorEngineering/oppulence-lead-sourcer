import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { UserCreateNestedOneWithoutProjectsInputSchema } from './UserCreateNestedOneWithoutProjectsInputSchema';
import { ProjectCreateNestedOneWithoutUsersInputSchema } from './ProjectCreateNestedOneWithoutUsersInputSchema';

export const ProjectUsersCreateWithoutNotificationPreferenceInputSchema: z.ZodType<Prisma.ProjectUsersCreateWithoutNotificationPreferenceInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProjectsInputSchema),
  project: z.lazy(() => ProjectCreateNestedOneWithoutUsersInputSchema)
}).strict();

export default ProjectUsersCreateWithoutNotificationPreferenceInputSchema;
