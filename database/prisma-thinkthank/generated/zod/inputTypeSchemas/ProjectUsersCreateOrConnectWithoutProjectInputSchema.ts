import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUsersWhereUniqueInputSchema } from './ProjectUsersWhereUniqueInputSchema'
import { ProjectUsersCreateWithoutProjectInputSchema } from './ProjectUsersCreateWithoutProjectInputSchema'
import { ProjectUsersUncheckedCreateWithoutProjectInputSchema } from './ProjectUsersUncheckedCreateWithoutProjectInputSchema'

export const ProjectUsersCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.ProjectUsersCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => ProjectUsersWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProjectUsersCreateWithoutProjectInputSchema),
            z.lazy(() => ProjectUsersUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default ProjectUsersCreateOrConnectWithoutProjectInputSchema
