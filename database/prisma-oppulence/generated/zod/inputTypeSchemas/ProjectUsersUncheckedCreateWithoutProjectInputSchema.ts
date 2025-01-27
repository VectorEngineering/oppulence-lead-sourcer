import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RoleSchema } from './RoleSchema'
import { NotificationPreferenceUncheckedCreateNestedOneWithoutProjectUserInputSchema } from './NotificationPreferenceUncheckedCreateNestedOneWithoutProjectUserInputSchema'

export const ProjectUsersUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectUsersUncheckedCreateWithoutProjectInput> = z
    .object({
        id: z.string().cuid().optional(),
        role: z.lazy(() => RoleSchema).optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        userId: z.string(),
        notificationPreference: z.lazy(() => NotificationPreferenceUncheckedCreateNestedOneWithoutProjectUserInputSchema).optional()
    })
    .strict()

export default ProjectUsersUncheckedCreateWithoutProjectInputSchema
