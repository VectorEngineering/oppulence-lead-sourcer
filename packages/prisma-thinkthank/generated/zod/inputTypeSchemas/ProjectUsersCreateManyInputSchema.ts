import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RoleSchema } from './RoleSchema'

export const ProjectUsersCreateManyInputSchema: z.ZodType<Prisma.ProjectUsersCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        role: z.lazy(() => RoleSchema).optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        userId: z.string(),
        projectId: z.string()
    })
    .strict()

export default ProjectUsersCreateManyInputSchema
