import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RoleSchema } from './RoleSchema'

export const ProjectInviteUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectInviteUncheckedCreateInput> = z
    .object({
        email: z.string(),
        expires: z.coerce.date(),
        projectId: z.string(),
        role: z.lazy(() => RoleSchema).optional(),
        createdAt: z.coerce.date().optional()
    })
    .strict()

export default ProjectInviteUncheckedCreateInputSchema
