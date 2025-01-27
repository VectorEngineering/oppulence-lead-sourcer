import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUsersWhereUniqueInputSchema } from './ProjectUsersWhereUniqueInputSchema'
import { ProjectUsersUpdateWithoutProjectInputSchema } from './ProjectUsersUpdateWithoutProjectInputSchema'
import { ProjectUsersUncheckedUpdateWithoutProjectInputSchema } from './ProjectUsersUncheckedUpdateWithoutProjectInputSchema'
import { ProjectUsersCreateWithoutProjectInputSchema } from './ProjectUsersCreateWithoutProjectInputSchema'
import { ProjectUsersUncheckedCreateWithoutProjectInputSchema } from './ProjectUsersUncheckedCreateWithoutProjectInputSchema'

export const ProjectUsersUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ProjectUsersUpsertWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => ProjectUsersWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => ProjectUsersUpdateWithoutProjectInputSchema),
                z.lazy(() => ProjectUsersUncheckedUpdateWithoutProjectInputSchema)
            ]),
            create: z.union([
                z.lazy(() => ProjectUsersCreateWithoutProjectInputSchema),
                z.lazy(() => ProjectUsersUncheckedCreateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default ProjectUsersUpsertWithWhereUniqueWithoutProjectInputSchema
