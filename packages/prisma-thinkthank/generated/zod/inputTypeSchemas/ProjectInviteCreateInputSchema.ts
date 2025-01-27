import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RoleSchema } from './RoleSchema'
import { ProjectCreateNestedOneWithoutInvitesInputSchema } from './ProjectCreateNestedOneWithoutInvitesInputSchema'

export const ProjectInviteCreateInputSchema: z.ZodType<Prisma.ProjectInviteCreateInput> = z
    .object({
        email: z.string(),
        expires: z.coerce.date(),
        role: z.lazy(() => RoleSchema).optional(),
        createdAt: z.coerce.date().optional(),
        project: z.lazy(() => ProjectCreateNestedOneWithoutInvitesInputSchema)
    })
    .strict()

export default ProjectInviteCreateInputSchema
