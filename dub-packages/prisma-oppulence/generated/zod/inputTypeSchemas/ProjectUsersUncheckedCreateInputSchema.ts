import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { NotificationPreferenceUncheckedCreateNestedOneWithoutProjectUserInputSchema } from './NotificationPreferenceUncheckedCreateNestedOneWithoutProjectUserInputSchema';

export const ProjectUsersUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectUsersUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  projectId: z.string(),
  notificationPreference: z.lazy(() => NotificationPreferenceUncheckedCreateNestedOneWithoutProjectUserInputSchema).optional()
}).strict();

export default ProjectUsersUncheckedCreateInputSchema;
