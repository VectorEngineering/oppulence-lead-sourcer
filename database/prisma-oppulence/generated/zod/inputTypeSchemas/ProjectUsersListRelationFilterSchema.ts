import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUsersWhereInputSchema } from './ProjectUsersWhereInputSchema'

export const ProjectUsersListRelationFilterSchema: z.ZodType<Prisma.ProjectUsersListRelationFilter> = z
    .object({
        every: z.lazy(() => ProjectUsersWhereInputSchema).optional(),
        some: z.lazy(() => ProjectUsersWhereInputSchema).optional(),
        none: z.lazy(() => ProjectUsersWhereInputSchema).optional()
    })
    .strict()

export default ProjectUsersListRelationFilterSchema
