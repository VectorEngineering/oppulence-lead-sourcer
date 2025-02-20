import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RoleSchema } from './RoleSchema'
import { ProjectCreateNestedOneWithoutUsersInputSchema } from './ProjectCreateNestedOneWithoutUsersInputSchema'
import { NotificationPreferenceCreateNestedOneWithoutProjectUserInputSchema } from './NotificationPreferenceCreateNestedOneWithoutProjectUserInputSchema'

export const ProjectUsersCreateWithoutUserInputSchema: z.ZodType<Prisma.ProjectUsersCreateWithoutUserInput> = z
    .object({
        id: z.string().cuid().optional(),
        role: z.lazy(() => RoleSchema).optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        project: z.lazy(() => ProjectCreateNestedOneWithoutUsersInputSchema),
        notificationPreference: z.lazy(() => NotificationPreferenceCreateNestedOneWithoutProjectUserInputSchema).optional()
    })
    .strict()

export default ProjectUsersCreateWithoutUserInputSchema
