import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputSchema } from './WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputSchema'
import { WorkspaceInvitationUncheckedCreateNestedManyWithoutWorkspaceInputSchema } from './WorkspaceInvitationUncheckedCreateNestedManyWithoutWorkspaceInputSchema'

export const WorkspaceUncheckedCreateInputSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        description: z.string().optional().nullable(),
        ownerId: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        members: z.lazy(() => WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputSchema).optional(),
        workspaceInvitations: z.lazy(() => WorkspaceInvitationUncheckedCreateNestedManyWithoutWorkspaceInputSchema).optional()
    })
    .strict()

export default WorkspaceUncheckedCreateInputSchema
