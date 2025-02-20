import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { UserUpdateOneRequiredWithoutWorkspacesNestedInputSchema } from './UserUpdateOneRequiredWithoutWorkspacesNestedInputSchema'
import { WorkspaceMemberUpdateManyWithoutWorkspaceNestedInputSchema } from './WorkspaceMemberUpdateManyWithoutWorkspaceNestedInputSchema'
import { WorkspaceInvitationUpdateManyWithoutWorkspaceNestedInputSchema } from './WorkspaceInvitationUpdateManyWithoutWorkspaceNestedInputSchema'

export const WorkspaceUpdateInputSchema: z.ZodType<Prisma.WorkspaceUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        description: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        owner: z.lazy(() => UserUpdateOneRequiredWithoutWorkspacesNestedInputSchema).optional(),
        members: z.lazy(() => WorkspaceMemberUpdateManyWithoutWorkspaceNestedInputSchema).optional(),
        workspaceInvitations: z.lazy(() => WorkspaceInvitationUpdateManyWithoutWorkspaceNestedInputSchema).optional()
    })
    .strict()

export default WorkspaceUpdateInputSchema
