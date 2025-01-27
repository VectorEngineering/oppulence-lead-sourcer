import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RestrictedTokenWhereInputSchema } from './RestrictedTokenWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { UserRelationFilterSchema } from './UserRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { OAuthRefreshTokenListRelationFilterSchema } from './OAuthRefreshTokenListRelationFilterSchema'
import { InstalledIntegrationNullableRelationFilterSchema } from './InstalledIntegrationNullableRelationFilterSchema'
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema'

export const RestrictedTokenWhereUniqueInputSchema: z.ZodType<Prisma.RestrictedTokenWhereUniqueInput> = z
    .union([
        z.object({
            id: z.string().cuid(),
            hashedKey: z.string()
        }),
        z.object({
            id: z.string().cuid()
        }),
        z.object({
            hashedKey: z.string()
        })
    ])
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                hashedKey: z.string().optional(),
                AND: z
                    .union([z.lazy(() => RestrictedTokenWhereInputSchema), z.lazy(() => RestrictedTokenWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => RestrictedTokenWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => RestrictedTokenWhereInputSchema), z.lazy(() => RestrictedTokenWhereInputSchema).array()])
                    .optional(),
                name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                partialKey: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                scopes: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                expires: z
                    .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
                    .optional()
                    .nullable(),
                lastUsed: z
                    .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
                    .optional()
                    .nullable(),
                rateLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                installationId: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
                project: z.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)]).optional(),
                refreshTokens: z.lazy(() => OAuthRefreshTokenListRelationFilterSchema).optional(),
                installedIntegration: z
                    .union([
                        z.lazy(() => InstalledIntegrationNullableRelationFilterSchema),
                        z.lazy(() => InstalledIntegrationWhereInputSchema)
                    ])
                    .optional()
                    .nullable()
            })
            .strict()
    )

export default RestrictedTokenWhereUniqueInputSchema
