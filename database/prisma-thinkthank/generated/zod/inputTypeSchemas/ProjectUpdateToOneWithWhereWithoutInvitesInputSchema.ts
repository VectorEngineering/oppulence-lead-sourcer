import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutInvitesInputSchema } from './ProjectUpdateWithoutInvitesInputSchema'
import { ProjectUncheckedUpdateWithoutInvitesInputSchema } from './ProjectUncheckedUpdateWithoutInvitesInputSchema'

export const ProjectUpdateToOneWithWhereWithoutInvitesInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutInvitesInput> = z
    .object({
        where: z.lazy(() => ProjectWhereInputSchema).optional(),
        data: z.union([z.lazy(() => ProjectUpdateWithoutInvitesInputSchema), z.lazy(() => ProjectUncheckedUpdateWithoutInvitesInputSchema)])
    })
    .strict()

export default ProjectUpdateToOneWithWhereWithoutInvitesInputSchema
