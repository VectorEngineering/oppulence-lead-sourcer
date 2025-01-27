import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceInvitationWhereInputSchema } from '../inputTypeSchemas/WorkspaceInvitationWhereInputSchema'

export const WorkspaceInvitationDeleteManyArgsSchema: z.ZodType<Prisma.WorkspaceInvitationDeleteManyArgs> = z
    .object({
        where: WorkspaceInvitationWhereInputSchema.optional()
    })
    .strict()

export default WorkspaceInvitationDeleteManyArgsSchema
