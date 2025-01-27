import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectInviteCreateManyInputSchema } from '../inputTypeSchemas/ProjectInviteCreateManyInputSchema'

export const ProjectInviteCreateManyArgsSchema: z.ZodType<Prisma.ProjectInviteCreateManyArgs> = z
    .object({
        data: z.union([ProjectInviteCreateManyInputSchema, ProjectInviteCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ProjectInviteCreateManyArgsSchema
