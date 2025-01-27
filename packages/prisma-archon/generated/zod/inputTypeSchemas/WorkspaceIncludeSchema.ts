import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { WorkspaceMemberFindManyArgsSchema } from '../outputTypeSchemas/WorkspaceMemberFindManyArgsSchema'
import { WorkspaceInvitationFindManyArgsSchema } from '../outputTypeSchemas/WorkspaceInvitationFindManyArgsSchema'
import { WorkspaceCountOutputTypeArgsSchema } from '../outputTypeSchemas/WorkspaceCountOutputTypeArgsSchema'

export const WorkspaceIncludeSchema: z.ZodType<Prisma.WorkspaceInclude> = z
    .object({
        owner: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        members: z.union([z.boolean(), z.lazy(() => WorkspaceMemberFindManyArgsSchema)]).optional(),
        workspaceInvitations: z.union([z.boolean(), z.lazy(() => WorkspaceInvitationFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => WorkspaceCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default WorkspaceIncludeSchema
