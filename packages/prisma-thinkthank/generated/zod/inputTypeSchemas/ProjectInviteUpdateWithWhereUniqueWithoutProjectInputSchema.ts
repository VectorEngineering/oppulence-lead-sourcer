import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectInviteWhereUniqueInputSchema } from './ProjectInviteWhereUniqueInputSchema'
import { ProjectInviteUpdateWithoutProjectInputSchema } from './ProjectInviteUpdateWithoutProjectInputSchema'
import { ProjectInviteUncheckedUpdateWithoutProjectInputSchema } from './ProjectInviteUncheckedUpdateWithoutProjectInputSchema'

export const ProjectInviteUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ProjectInviteUpdateWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => ProjectInviteWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => ProjectInviteUpdateWithoutProjectInputSchema),
                z.lazy(() => ProjectInviteUncheckedUpdateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default ProjectInviteUpdateWithWhereUniqueWithoutProjectInputSchema
