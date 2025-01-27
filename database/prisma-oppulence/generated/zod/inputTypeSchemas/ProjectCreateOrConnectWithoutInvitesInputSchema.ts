import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutInvitesInputSchema } from './ProjectCreateWithoutInvitesInputSchema'
import { ProjectUncheckedCreateWithoutInvitesInputSchema } from './ProjectUncheckedCreateWithoutInvitesInputSchema'

export const ProjectCreateOrConnectWithoutInvitesInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutInvitesInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutInvitesInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutInvitesInputSchema)
        ])
    })
    .strict()

export default ProjectCreateOrConnectWithoutInvitesInputSchema
