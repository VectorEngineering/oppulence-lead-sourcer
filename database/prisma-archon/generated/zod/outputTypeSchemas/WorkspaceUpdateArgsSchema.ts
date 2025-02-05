import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceIncludeSchema } from '../inputTypeSchemas/WorkspaceIncludeSchema'
import { WorkspaceUpdateInputSchema } from '../inputTypeSchemas/WorkspaceUpdateInputSchema'
import { WorkspaceUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorkspaceUncheckedUpdateInputSchema'
import { WorkspaceWhereUniqueInputSchema } from '../inputTypeSchemas/WorkspaceWhereUniqueInputSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { WorkspaceMemberFindManyArgsSchema } from '../outputTypeSchemas/WorkspaceMemberFindManyArgsSchema'
import { WorkspaceInvitationFindManyArgsSchema } from '../outputTypeSchemas/WorkspaceInvitationFindManyArgsSchema'
import { WorkspaceCountOutputTypeArgsSchema } from '../outputTypeSchemas/WorkspaceCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkspaceSelectSchema: z.ZodType<Prisma.WorkspaceSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        description: z.boolean().optional(),
        ownerId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        owner: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        members: z.union([z.boolean(), z.lazy(() => WorkspaceMemberFindManyArgsSchema)]).optional(),
        workspaceInvitations: z.union([z.boolean(), z.lazy(() => WorkspaceInvitationFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => WorkspaceCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const WorkspaceUpdateArgsSchema: z.ZodType<Prisma.WorkspaceUpdateArgs> = z
    .object({
        select: WorkspaceSelectSchema.optional(),
        include: WorkspaceIncludeSchema.optional(),
        data: z.union([WorkspaceUpdateInputSchema, WorkspaceUncheckedUpdateInputSchema]),
        where: WorkspaceWhereUniqueInputSchema
    })
    .strict()

export default WorkspaceUpdateArgsSchema
