import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceArgsSchema } from '../outputTypeSchemas/WorkspaceArgsSchema'

export const WorkspaceInvitationIncludeSchema: z.ZodType<Prisma.WorkspaceInvitationInclude> = z
    .object({
        workspace: z.union([z.boolean(), z.lazy(() => WorkspaceArgsSchema)]).optional()
    })
    .strict()

export default WorkspaceInvitationIncludeSchema
