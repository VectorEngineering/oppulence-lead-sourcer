import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutUsersInputSchema } from './ProjectCreateWithoutUsersInputSchema'
import { ProjectUncheckedCreateWithoutUsersInputSchema } from './ProjectUncheckedCreateWithoutUsersInputSchema'

export const ProjectCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutUsersInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([z.lazy(() => ProjectCreateWithoutUsersInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutUsersInputSchema)])
    })
    .strict()

export default ProjectCreateOrConnectWithoutUsersInputSchema
