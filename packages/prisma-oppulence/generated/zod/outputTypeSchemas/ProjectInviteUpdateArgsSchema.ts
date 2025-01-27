import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectInviteIncludeSchema } from '../inputTypeSchemas/ProjectInviteIncludeSchema'
import { ProjectInviteUpdateInputSchema } from '../inputTypeSchemas/ProjectInviteUpdateInputSchema'
import { ProjectInviteUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectInviteUncheckedUpdateInputSchema'
import { ProjectInviteWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectInviteWhereUniqueInputSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectInviteSelectSchema: z.ZodType<Prisma.ProjectInviteSelect> = z
    .object({
        email: z.boolean().optional(),
        expires: z.boolean().optional(),
        projectId: z.boolean().optional(),
        role: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export const ProjectInviteUpdateArgsSchema: z.ZodType<Prisma.ProjectInviteUpdateArgs> = z
    .object({
        select: ProjectInviteSelectSchema.optional(),
        include: ProjectInviteIncludeSchema.optional(),
        data: z.union([ProjectInviteUpdateInputSchema, ProjectInviteUncheckedUpdateInputSchema]),
        where: ProjectInviteWhereUniqueInputSchema
    })
    .strict()

export default ProjectInviteUpdateArgsSchema
