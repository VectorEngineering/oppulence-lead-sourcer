import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUsersWhereInputSchema } from './ProjectUsersWhereInputSchema'

export const ProjectUsersRelationFilterSchema: z.ZodType<Prisma.ProjectUsersRelationFilter> = z
    .object({
        is: z.lazy(() => ProjectUsersWhereInputSchema).optional(),
        isNot: z.lazy(() => ProjectUsersWhereInputSchema).optional()
    })
    .strict()

export default ProjectUsersRelationFilterSchema
