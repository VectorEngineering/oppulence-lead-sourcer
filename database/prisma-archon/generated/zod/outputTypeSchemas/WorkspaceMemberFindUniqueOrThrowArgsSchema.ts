import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceMemberIncludeSchema } from '../inputTypeSchemas/WorkspaceMemberIncludeSchema'
import { WorkspaceMemberWhereUniqueInputSchema } from '../inputTypeSchemas/WorkspaceMemberWhereUniqueInputSchema'
import { WorkspaceArgsSchema } from './WorkspaceArgsSchema'
import { UserArgsSchema } from './UserArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const WorkspaceMemberFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WorkspaceMemberFindUniqueOrThrowArgs> = z
    .object({
        select: WorkspaceMemberSelectSchema.optional(),
        include: WorkspaceMemberIncludeSchema.optional(),
        where: WorkspaceMemberWhereUniqueInputSchema
    })
    .strict()

export default WorkspaceMemberFindUniqueOrThrowArgsSchema
