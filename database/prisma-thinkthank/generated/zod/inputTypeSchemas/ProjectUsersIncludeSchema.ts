import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { NotificationPreferenceArgsSchema } from '../outputTypeSchemas/NotificationPreferenceArgsSchema'

export const ProjectUsersIncludeSchema: z.ZodType<Prisma.ProjectUsersInclude> = z
    .object({
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        notificationPreference: z.union([z.boolean(), z.lazy(() => NotificationPreferenceArgsSchema)]).optional()
    })
    .strict()

export default ProjectUsersIncludeSchema
