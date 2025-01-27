import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectUsersCreateManyInputSchema } from '../inputTypeSchemas/ProjectUsersCreateManyInputSchema'

export const ProjectUsersCreateManyArgsSchema: z.ZodType<Prisma.ProjectUsersCreateManyArgs> = z
    .object({
        data: z.union([ProjectUsersCreateManyInputSchema, ProjectUsersCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ProjectUsersCreateManyArgsSchema
