import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUsersWhereUniqueInputSchema } from './ProjectUsersWhereUniqueInputSchema'
import { ProjectUsersUpdateWithoutUserInputSchema } from './ProjectUsersUpdateWithoutUserInputSchema'
import { ProjectUsersUncheckedUpdateWithoutUserInputSchema } from './ProjectUsersUncheckedUpdateWithoutUserInputSchema'
import { ProjectUsersCreateWithoutUserInputSchema } from './ProjectUsersCreateWithoutUserInputSchema'
import { ProjectUsersUncheckedCreateWithoutUserInputSchema } from './ProjectUsersUncheckedCreateWithoutUserInputSchema'

export const ProjectUsersUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ProjectUsersUpsertWithWhereUniqueWithoutUserInput> =
    z
        .object({
            where: z.lazy(() => ProjectUsersWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => ProjectUsersUpdateWithoutUserInputSchema),
                z.lazy(() => ProjectUsersUncheckedUpdateWithoutUserInputSchema)
            ]),
            create: z.union([
                z.lazy(() => ProjectUsersCreateWithoutUserInputSchema),
                z.lazy(() => ProjectUsersUncheckedCreateWithoutUserInputSchema)
            ])
        })
        .strict()

export default ProjectUsersUpsertWithWhereUniqueWithoutUserInputSchema
