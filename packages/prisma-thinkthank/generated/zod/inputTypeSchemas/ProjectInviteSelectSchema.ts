import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'

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

export default ProjectInviteSelectSchema
