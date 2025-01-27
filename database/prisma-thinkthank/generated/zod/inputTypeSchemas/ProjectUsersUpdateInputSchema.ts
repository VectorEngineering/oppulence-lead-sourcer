import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { RoleSchema } from './RoleSchema'
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { UserUpdateOneRequiredWithoutProjectsNestedInputSchema } from './UserUpdateOneRequiredWithoutProjectsNestedInputSchema'
import { ProjectUpdateOneRequiredWithoutUsersNestedInputSchema } from './ProjectUpdateOneRequiredWithoutUsersNestedInputSchema'
import { NotificationPreferenceUpdateOneWithoutProjectUserNestedInputSchema } from './NotificationPreferenceUpdateOneWithoutProjectUserNestedInputSchema'

export const ProjectUsersUpdateInputSchema: z.ZodType<Prisma.ProjectUsersUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        user: z.lazy(() => UserUpdateOneRequiredWithoutProjectsNestedInputSchema).optional(),
        project: z.lazy(() => ProjectUpdateOneRequiredWithoutUsersNestedInputSchema).optional(),
        notificationPreference: z.lazy(() => NotificationPreferenceUpdateOneWithoutProjectUserNestedInputSchema).optional()
    })
    .strict()

export default ProjectUsersUpdateInputSchema
