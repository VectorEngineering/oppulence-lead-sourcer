import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUsersScalarWhereInputSchema } from './ProjectUsersScalarWhereInputSchema'
import { ProjectUsersUpdateManyMutationInputSchema } from './ProjectUsersUpdateManyMutationInputSchema'
import { ProjectUsersUncheckedUpdateManyWithoutProjectInputSchema } from './ProjectUsersUncheckedUpdateManyWithoutProjectInputSchema'

export const ProjectUsersUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.ProjectUsersUpdateManyWithWhereWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => ProjectUsersScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => ProjectUsersUpdateManyMutationInputSchema),
                z.lazy(() => ProjectUsersUncheckedUpdateManyWithoutProjectInputSchema)
            ])
        })
        .strict()

export default ProjectUsersUpdateManyWithWhereWithoutProjectInputSchema
