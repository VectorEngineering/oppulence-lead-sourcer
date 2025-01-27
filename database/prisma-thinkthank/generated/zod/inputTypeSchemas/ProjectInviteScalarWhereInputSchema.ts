import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema'
import { RoleSchema } from './RoleSchema'

export const ProjectInviteScalarWhereInputSchema: z.ZodType<Prisma.ProjectInviteScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => ProjectInviteScalarWhereInputSchema), z.lazy(() => ProjectInviteScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => ProjectInviteScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => ProjectInviteScalarWhereInputSchema), z.lazy(() => ProjectInviteScalarWhereInputSchema).array()])
            .optional(),
        email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        expires: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        role: z.union([z.lazy(() => EnumRoleFilterSchema), z.lazy(() => RoleSchema)]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default ProjectInviteScalarWhereInputSchema
