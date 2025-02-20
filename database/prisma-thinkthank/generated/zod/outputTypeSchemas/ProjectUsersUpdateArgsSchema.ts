import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectUsersIncludeSchema } from '../inputTypeSchemas/ProjectUsersIncludeSchema'
import { ProjectUsersUpdateInputSchema } from '../inputTypeSchemas/ProjectUsersUpdateInputSchema'
import { ProjectUsersUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectUsersUncheckedUpdateInputSchema'
import { ProjectUsersWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectUsersWhereUniqueInputSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { NotificationPreferenceArgsSchema } from '../outputTypeSchemas/NotificationPreferenceArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectUsersSelectSchema: z.ZodType<Prisma.ProjectUsersSelect> = z
    .object({
        id: z.boolean().optional(),
        role: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        userId: z.boolean().optional(),
        projectId: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        notificationPreference: z.union([z.boolean(), z.lazy(() => NotificationPreferenceArgsSchema)]).optional()
    })
    .strict()

export const ProjectUsersUpdateArgsSchema: z.ZodType<Prisma.ProjectUsersUpdateArgs> = z
    .object({
        select: ProjectUsersSelectSchema.optional(),
        include: ProjectUsersIncludeSchema.optional(),
        data: z.union([ProjectUsersUpdateInputSchema, ProjectUsersUncheckedUpdateInputSchema]),
        where: ProjectUsersWhereUniqueInputSchema
    })
    .strict()

export default ProjectUsersUpdateArgsSchema
