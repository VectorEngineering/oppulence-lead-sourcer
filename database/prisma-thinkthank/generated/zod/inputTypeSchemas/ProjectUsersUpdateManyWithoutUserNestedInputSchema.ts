import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUsersCreateWithoutUserInputSchema } from './ProjectUsersCreateWithoutUserInputSchema'
import { ProjectUsersUncheckedCreateWithoutUserInputSchema } from './ProjectUsersUncheckedCreateWithoutUserInputSchema'
import { ProjectUsersCreateOrConnectWithoutUserInputSchema } from './ProjectUsersCreateOrConnectWithoutUserInputSchema'
import { ProjectUsersUpsertWithWhereUniqueWithoutUserInputSchema } from './ProjectUsersUpsertWithWhereUniqueWithoutUserInputSchema'
import { ProjectUsersCreateManyUserInputEnvelopeSchema } from './ProjectUsersCreateManyUserInputEnvelopeSchema'
import { ProjectUsersWhereUniqueInputSchema } from './ProjectUsersWhereUniqueInputSchema'
import { ProjectUsersUpdateWithWhereUniqueWithoutUserInputSchema } from './ProjectUsersUpdateWithWhereUniqueWithoutUserInputSchema'
import { ProjectUsersUpdateManyWithWhereWithoutUserInputSchema } from './ProjectUsersUpdateManyWithWhereWithoutUserInputSchema'
import { ProjectUsersScalarWhereInputSchema } from './ProjectUsersScalarWhereInputSchema'

export const ProjectUsersUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ProjectUsersUpdateManyWithoutUserNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ProjectUsersCreateWithoutUserInputSchema),
                z.lazy(() => ProjectUsersCreateWithoutUserInputSchema).array(),
                z.lazy(() => ProjectUsersUncheckedCreateWithoutUserInputSchema),
                z.lazy(() => ProjectUsersUncheckedCreateWithoutUserInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ProjectUsersCreateOrConnectWithoutUserInputSchema),
                z.lazy(() => ProjectUsersCreateOrConnectWithoutUserInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => ProjectUsersUpsertWithWhereUniqueWithoutUserInputSchema),
                z.lazy(() => ProjectUsersUpsertWithWhereUniqueWithoutUserInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => ProjectUsersCreateManyUserInputEnvelopeSchema).optional(),
        set: z
            .union([z.lazy(() => ProjectUsersWhereUniqueInputSchema), z.lazy(() => ProjectUsersWhereUniqueInputSchema).array()])
            .optional(),
        disconnect: z
            .union([z.lazy(() => ProjectUsersWhereUniqueInputSchema), z.lazy(() => ProjectUsersWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => ProjectUsersWhereUniqueInputSchema), z.lazy(() => ProjectUsersWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => ProjectUsersWhereUniqueInputSchema), z.lazy(() => ProjectUsersWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => ProjectUsersUpdateWithWhereUniqueWithoutUserInputSchema),
                z.lazy(() => ProjectUsersUpdateWithWhereUniqueWithoutUserInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => ProjectUsersUpdateManyWithWhereWithoutUserInputSchema),
                z.lazy(() => ProjectUsersUpdateManyWithWhereWithoutUserInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => ProjectUsersScalarWhereInputSchema), z.lazy(() => ProjectUsersScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default ProjectUsersUpdateManyWithoutUserNestedInputSchema
