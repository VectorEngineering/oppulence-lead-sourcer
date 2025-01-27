import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUsersCreateWithoutProjectInputSchema } from './ProjectUsersCreateWithoutProjectInputSchema'
import { ProjectUsersUncheckedCreateWithoutProjectInputSchema } from './ProjectUsersUncheckedCreateWithoutProjectInputSchema'
import { ProjectUsersCreateOrConnectWithoutProjectInputSchema } from './ProjectUsersCreateOrConnectWithoutProjectInputSchema'
import { ProjectUsersCreateManyProjectInputEnvelopeSchema } from './ProjectUsersCreateManyProjectInputEnvelopeSchema'
import { ProjectUsersWhereUniqueInputSchema } from './ProjectUsersWhereUniqueInputSchema'

export const ProjectUsersCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.ProjectUsersCreateNestedManyWithoutProjectInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ProjectUsersCreateWithoutProjectInputSchema),
                z.lazy(() => ProjectUsersCreateWithoutProjectInputSchema).array(),
                z.lazy(() => ProjectUsersUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => ProjectUsersUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ProjectUsersCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => ProjectUsersCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => ProjectUsersCreateManyProjectInputEnvelopeSchema).optional(),
        connect: z
            .union([z.lazy(() => ProjectUsersWhereUniqueInputSchema), z.lazy(() => ProjectUsersWhereUniqueInputSchema).array()])
            .optional()
    })
    .strict()

export default ProjectUsersCreateNestedManyWithoutProjectInputSchema
