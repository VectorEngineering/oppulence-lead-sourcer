import type { Prisma } from '@prisma/client'

import { z } from 'zod'
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

export const RestrictedTokenWhereInputSchema: z.ZodType<Prisma.RestrictedTokenWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => RestrictedTokenWhereInputSchema), z.lazy(() => RestrictedTokenWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => RestrictedTokenWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => RestrictedTokenWhereInputSchema), z.lazy(() => RestrictedTokenWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        hashedKey: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
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
        rateLimit: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
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
            .union([z.lazy(() => InstalledIntegrationNullableRelationFilterSchema), z.lazy(() => InstalledIntegrationWhereInputSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default RestrictedTokenWhereInputSchema
