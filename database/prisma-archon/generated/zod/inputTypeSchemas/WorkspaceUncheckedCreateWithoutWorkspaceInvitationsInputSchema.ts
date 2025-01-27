import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputSchema } from './WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputSchema'

export const WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInputSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInput> =
    z
        .object({
            id: z.string().cuid().optional(),
            name: z.string(),
            description: z.string().optional().nullable(),
            ownerId: z.string(),
            createdAt: z.coerce.date().optional(),
            updatedAt: z.coerce.date().optional(),
            members: z.lazy(() => WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputSchema).optional()
        })
        .strict()

export default WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInputSchema
