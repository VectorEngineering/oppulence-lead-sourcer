import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { UserUpdateOneRequiredWithoutWorkspaceMembersNestedInputSchema } from './UserUpdateOneRequiredWithoutWorkspaceMembersNestedInputSchema'

export const WorkspaceMemberUpdateWithoutWorkspaceInputSchema: z.ZodType<Prisma.WorkspaceMemberUpdateWithoutWorkspaceInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        role: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        user: z.lazy(() => UserUpdateOneRequiredWithoutWorkspaceMembersNestedInputSchema).optional()
    })
    .strict()

export default WorkspaceMemberUpdateWithoutWorkspaceInputSchema
