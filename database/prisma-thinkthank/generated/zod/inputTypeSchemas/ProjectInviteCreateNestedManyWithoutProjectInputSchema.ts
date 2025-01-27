import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectInviteCreateWithoutProjectInputSchema } from './ProjectInviteCreateWithoutProjectInputSchema'
import { ProjectInviteUncheckedCreateWithoutProjectInputSchema } from './ProjectInviteUncheckedCreateWithoutProjectInputSchema'
import { ProjectInviteCreateOrConnectWithoutProjectInputSchema } from './ProjectInviteCreateOrConnectWithoutProjectInputSchema'
import { ProjectInviteCreateManyProjectInputEnvelopeSchema } from './ProjectInviteCreateManyProjectInputEnvelopeSchema'
import { ProjectInviteWhereUniqueInputSchema } from './ProjectInviteWhereUniqueInputSchema'

export const ProjectInviteCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.ProjectInviteCreateNestedManyWithoutProjectInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ProjectInviteCreateWithoutProjectInputSchema),
                z.lazy(() => ProjectInviteCreateWithoutProjectInputSchema).array(),
                z.lazy(() => ProjectInviteUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => ProjectInviteUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ProjectInviteCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => ProjectInviteCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => ProjectInviteCreateManyProjectInputEnvelopeSchema).optional(),
        connect: z
            .union([z.lazy(() => ProjectInviteWhereUniqueInputSchema), z.lazy(() => ProjectInviteWhereUniqueInputSchema).array()])
            .optional()
    })
    .strict()

export default ProjectInviteCreateNestedManyWithoutProjectInputSchema
