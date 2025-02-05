import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceArgsSchema } from '../outputTypeSchemas/WorkspaceArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'

export const WorkspaceMemberIncludeSchema: z.ZodType<Prisma.WorkspaceMemberInclude> = z
    .object({
        workspace: z.union([z.boolean(), z.lazy(() => WorkspaceArgsSchema)]).optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
    })
    .strict()

export default WorkspaceMemberIncludeSchema
