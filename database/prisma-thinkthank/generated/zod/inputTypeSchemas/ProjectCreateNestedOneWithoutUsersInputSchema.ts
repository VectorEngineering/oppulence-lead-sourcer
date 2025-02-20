import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutUsersInputSchema } from './ProjectCreateWithoutUsersInputSchema'
import { ProjectUncheckedCreateWithoutUsersInputSchema } from './ProjectUncheckedCreateWithoutUsersInputSchema'
import { ProjectCreateOrConnectWithoutUsersInputSchema } from './ProjectCreateOrConnectWithoutUsersInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutUsersInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutUsersInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutUsersInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutUsersInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutUsersInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutUsersInputSchema
