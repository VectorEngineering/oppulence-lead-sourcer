import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectUsersArgsSchema } from '../outputTypeSchemas/ProjectUsersArgsSchema'

export const NotificationPreferenceIncludeSchema: z.ZodType<Prisma.NotificationPreferenceInclude> = z
    .object({
        projectUser: z.union([z.boolean(), z.lazy(() => ProjectUsersArgsSchema)]).optional()
    })
    .strict()

export default NotificationPreferenceIncludeSchema
