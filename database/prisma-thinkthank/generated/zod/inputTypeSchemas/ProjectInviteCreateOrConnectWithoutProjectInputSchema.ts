import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectInviteWhereUniqueInputSchema } from './ProjectInviteWhereUniqueInputSchema'
import { ProjectInviteCreateWithoutProjectInputSchema } from './ProjectInviteCreateWithoutProjectInputSchema'
import { ProjectInviteUncheckedCreateWithoutProjectInputSchema } from './ProjectInviteUncheckedCreateWithoutProjectInputSchema'

export const ProjectInviteCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.ProjectInviteCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => ProjectInviteWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProjectInviteCreateWithoutProjectInputSchema),
            z.lazy(() => ProjectInviteUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default ProjectInviteCreateOrConnectWithoutProjectInputSchema
