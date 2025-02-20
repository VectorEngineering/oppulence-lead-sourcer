import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectUsersIncludeSchema } from '../inputTypeSchemas/ProjectUsersIncludeSchema'
import { ProjectUsersWhereInputSchema } from '../inputTypeSchemas/ProjectUsersWhereInputSchema'
import { ProjectUsersOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectUsersOrderByWithRelationInputSchema'
import { ProjectUsersWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectUsersWhereUniqueInputSchema'
import { ProjectUsersScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectUsersScalarFieldEnumSchema'
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

export const ProjectUsersFindManyArgsSchema: z.ZodType<Prisma.ProjectUsersFindManyArgs> = z
    .object({
        select: ProjectUsersSelectSchema.optional(),
        include: ProjectUsersIncludeSchema.optional(),
        where: ProjectUsersWhereInputSchema.optional(),
        orderBy: z.union([ProjectUsersOrderByWithRelationInputSchema.array(), ProjectUsersOrderByWithRelationInputSchema]).optional(),
        cursor: ProjectUsersWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([ProjectUsersScalarFieldEnumSchema, ProjectUsersScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default ProjectUsersFindManyArgsSchema
