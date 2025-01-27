import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectInviteWhereInputSchema } from '../inputTypeSchemas/ProjectInviteWhereInputSchema'

export const ProjectInviteDeleteManyArgsSchema: z.ZodType<Prisma.ProjectInviteDeleteManyArgs> = z
    .object({
        where: ProjectInviteWhereInputSchema.optional()
    })
    .strict()

export default ProjectInviteDeleteManyArgsSchema
