import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RoleSchema } from './RoleSchema'
import { UserCreateNestedOneWithoutProjectsInputSchema } from './UserCreateNestedOneWithoutProjectsInputSchema'
import { NotificationPreferenceCreateNestedOneWithoutProjectUserInputSchema } from './NotificationPreferenceCreateNestedOneWithoutProjectUserInputSchema'

export const ProjectUsersCreateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectUsersCreateWithoutProjectInput> = z
    .object({
        id: z.string().cuid().optional(),
        role: z.lazy(() => RoleSchema).optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        user: z.lazy(() => UserCreateNestedOneWithoutProjectsInputSchema),
        notificationPreference: z.lazy(() => NotificationPreferenceCreateNestedOneWithoutProjectUserInputSchema).optional()
    })
    .strict()

export default ProjectUsersCreateWithoutProjectInputSchema
