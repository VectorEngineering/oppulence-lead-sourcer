import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectInviteScalarWhereInputSchema } from './ProjectInviteScalarWhereInputSchema'
import { ProjectInviteUpdateManyMutationInputSchema } from './ProjectInviteUpdateManyMutationInputSchema'
import { ProjectInviteUncheckedUpdateManyWithoutProjectInputSchema } from './ProjectInviteUncheckedUpdateManyWithoutProjectInputSchema'

export const ProjectInviteUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.ProjectInviteUpdateManyWithWhereWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => ProjectInviteScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => ProjectInviteUpdateManyMutationInputSchema),
                z.lazy(() => ProjectInviteUncheckedUpdateManyWithoutProjectInputSchema)
            ])
        })
        .strict()

export default ProjectInviteUpdateManyWithWhereWithoutProjectInputSchema
