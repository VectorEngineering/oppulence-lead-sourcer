import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { LinkNullableRelationFilterSchema } from './LinkNullableRelationFilterSchema'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'
import { ProjectNullableRelationFilterSchema } from './ProjectNullableRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const DashboardWhereInputSchema: z.ZodType<Prisma.DashboardWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => DashboardWhereInputSchema), z.lazy(() => DashboardWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => DashboardWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => DashboardWhereInputSchema), z.lazy(() => DashboardWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        linkId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        projectId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        userId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        doIndex: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        password: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        showConversions: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        link: z
            .union([z.lazy(() => LinkNullableRelationFilterSchema), z.lazy(() => LinkWhereInputSchema)])
            .optional()
            .nullable(),
        project: z
            .union([z.lazy(() => ProjectNullableRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
            .optional()
            .nullable(),
        user: z
            .union([z.lazy(() => UserNullableRelationFilterSchema), z.lazy(() => UserWhereInputSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default DashboardWhereInputSchema
