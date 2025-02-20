import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { RoleSchema } from './RoleSchema'
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema'
import { ProjectUpdateOneRequiredWithoutInvitesNestedInputSchema } from './ProjectUpdateOneRequiredWithoutInvitesNestedInputSchema'

export const ProjectInviteUpdateInputSchema: z.ZodType<Prisma.ProjectInviteUpdateInput> = z
    .object({
        email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        expires: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        project: z.lazy(() => ProjectUpdateOneRequiredWithoutInvitesNestedInputSchema).optional()
    })
    .strict()

export default ProjectInviteUpdateInputSchema
