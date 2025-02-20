import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DashboardWhereInputSchema } from './DashboardWhereInputSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { LinkNullableRelationFilterSchema } from './LinkNullableRelationFilterSchema'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'
import { ProjectNullableRelationFilterSchema } from './ProjectNullableRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const DashboardWhereUniqueInputSchema: z.ZodType<Prisma.DashboardWhereUniqueInput> = z
    .union([
        z.object({
            id: z.string().cuid(),
            linkId: z.string()
        }),
        z.object({
            id: z.string().cuid()
        }),
        z.object({
            linkId: z.string()
        })
    ])
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                linkId: z.string().optional(),
                AND: z.union([z.lazy(() => DashboardWhereInputSchema), z.lazy(() => DashboardWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => DashboardWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => DashboardWhereInputSchema), z.lazy(() => DashboardWhereInputSchema).array()]).optional(),
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
    )

export default DashboardWhereUniqueInputSchema
