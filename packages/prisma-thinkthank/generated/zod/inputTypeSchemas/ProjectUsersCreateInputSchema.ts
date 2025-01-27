import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RoleSchema } from './RoleSchema'
import { UserCreateNestedOneWithoutProjectsInputSchema } from './UserCreateNestedOneWithoutProjectsInputSchema'
import { ProjectCreateNestedOneWithoutUsersInputSchema } from './ProjectCreateNestedOneWithoutUsersInputSchema'
import { NotificationPreferenceCreateNestedOneWithoutProjectUserInputSchema } from './NotificationPreferenceCreateNestedOneWithoutProjectUserInputSchema'

export const ProjectUsersCreateInputSchema: z.ZodType<Prisma.ProjectUsersCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        role: z.lazy(() => RoleSchema).optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        user: z.lazy(() => UserCreateNestedOneWithoutProjectsInputSchema),
        project: z.lazy(() => ProjectCreateNestedOneWithoutUsersInputSchema),
        notificationPreference: z.lazy(() => NotificationPreferenceCreateNestedOneWithoutProjectUserInputSchema).optional()
    })
    .strict()

export default ProjectUsersCreateInputSchema
