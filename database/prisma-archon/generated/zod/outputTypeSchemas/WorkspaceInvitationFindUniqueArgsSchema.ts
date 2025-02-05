import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceInvitationIncludeSchema } from '../inputTypeSchemas/WorkspaceInvitationIncludeSchema'
import { WorkspaceInvitationWhereUniqueInputSchema } from '../inputTypeSchemas/WorkspaceInvitationWhereUniqueInputSchema'
import { WorkspaceArgsSchema } from '../outputTypeSchemas/WorkspaceArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkspaceInvitationSelectSchema: z.ZodType<Prisma.WorkspaceInvitationSelect> = z
    .object({
        id: z.boolean().optional(),
        workspaceId: z.boolean().optional(),
        email: z.boolean().optional(),
        token: z.boolean().optional(),
        status: z.boolean().optional(),
        expiresAt: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        workspace: z.union([z.boolean(), z.lazy(() => WorkspaceArgsSchema)]).optional()
    })
    .strict()

export const WorkspaceInvitationFindUniqueArgsSchema: z.ZodType<Prisma.WorkspaceInvitationFindUniqueArgs> = z
    .object({
        select: WorkspaceInvitationSelectSchema.optional(),
        include: WorkspaceInvitationIncludeSchema.optional(),
        where: WorkspaceInvitationWhereUniqueInputSchema
    })
    .strict()

export default WorkspaceInvitationFindUniqueArgsSchema
