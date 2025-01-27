import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema'
import { RoleSchema } from './RoleSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { UserRelationFilterSchema } from './UserRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { NotificationPreferenceNullableRelationFilterSchema } from './NotificationPreferenceNullableRelationFilterSchema'
import { NotificationPreferenceWhereInputSchema } from './NotificationPreferenceWhereInputSchema'

export const ProjectUsersWhereInputSchema: z.ZodType<Prisma.ProjectUsersWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => ProjectUsersWhereInputSchema), z.lazy(() => ProjectUsersWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => ProjectUsersWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => ProjectUsersWhereInputSchema), z.lazy(() => ProjectUsersWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        role: z.union([z.lazy(() => EnumRoleFilterSchema), z.lazy(() => RoleSchema)]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
        project: z.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)]).optional(),
        notificationPreference: z
            .union([z.lazy(() => NotificationPreferenceNullableRelationFilterSchema), z.lazy(() => NotificationPreferenceWhereInputSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default ProjectUsersWhereInputSchema
