import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectInviteIncludeSchema } from '../inputTypeSchemas/ProjectInviteIncludeSchema'
import { ProjectInviteCreateInputSchema } from '../inputTypeSchemas/ProjectInviteCreateInputSchema'
import { ProjectInviteUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectInviteUncheckedCreateInputSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
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

export const ProjectInviteCreateArgsSchema: z.ZodType<Prisma.ProjectInviteCreateArgs> = z
    .object({
        select: ProjectInviteSelectSchema.optional(),
        include: ProjectInviteIncludeSchema.optional(),
        data: z.union([ProjectInviteCreateInputSchema, ProjectInviteUncheckedCreateInputSchema])
    })
    .strict()

export default ProjectInviteCreateArgsSchema
