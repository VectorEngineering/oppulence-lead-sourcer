import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { NotificationPreferenceArgsSchema } from "../outputTypeSchemas/NotificationPreferenceArgsSchema"

export const ProjectUsersSelectSchema: z.ZodType<Prisma.ProjectUsersSelect> = z.object({
  id: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  notificationPreference: z.union([z.boolean(),z.lazy(() => NotificationPreferenceArgsSchema)]).optional(),
}).strict()

export default ProjectUsersSelectSchema;
