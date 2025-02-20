import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceArgsSchema } from '../outputTypeSchemas/WorkspaceArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'

export const WorkspaceMemberSelectSchema: z.ZodType<Prisma.WorkspaceMemberSelect> = z
    .object({
        id: z.boolean().optional(),
        workspaceId: z.boolean().optional(),
        userId: z.boolean().optional(),
        role: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        workspace: z.union([z.boolean(), z.lazy(() => WorkspaceArgsSchema)]).optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
    })
    .strict()

export default WorkspaceMemberSelectSchema
