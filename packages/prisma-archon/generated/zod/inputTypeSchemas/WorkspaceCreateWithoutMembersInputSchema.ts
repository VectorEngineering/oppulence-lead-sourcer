import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateNestedOneWithoutWorkspacesInputSchema } from './UserCreateNestedOneWithoutWorkspacesInputSchema'
import { WorkspaceInvitationCreateNestedManyWithoutWorkspaceInputSchema } from './WorkspaceInvitationCreateNestedManyWithoutWorkspaceInputSchema'

export const WorkspaceCreateWithoutMembersInputSchema: z.ZodType<Prisma.WorkspaceCreateWithoutMembersInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        description: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        owner: z.lazy(() => UserCreateNestedOneWithoutWorkspacesInputSchema),
        workspaceInvitations: z.lazy(() => WorkspaceInvitationCreateNestedManyWithoutWorkspaceInputSchema).optional()
    })
    .strict()

export default WorkspaceCreateWithoutMembersInputSchema
