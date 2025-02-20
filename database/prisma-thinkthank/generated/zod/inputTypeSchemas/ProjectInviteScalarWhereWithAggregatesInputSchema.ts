import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { EnumRoleWithAggregatesFilterSchema } from './EnumRoleWithAggregatesFilterSchema'
import { RoleSchema } from './RoleSchema'

export const ProjectInviteScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectInviteScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ProjectInviteScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ProjectInviteScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => ProjectInviteScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ProjectInviteScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ProjectInviteScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        expires: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        projectId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        role: z.union([z.lazy(() => EnumRoleWithAggregatesFilterSchema), z.lazy(() => RoleSchema)]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default ProjectInviteScalarWhereWithAggregatesInputSchema
