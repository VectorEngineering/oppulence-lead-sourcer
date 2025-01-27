import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { UserRelationFilterSchema } from './UserRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { IntegrationRelationFilterSchema } from './IntegrationRelationFilterSchema'
import { IntegrationWhereInputSchema } from './IntegrationWhereInputSchema'
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { OAuthRefreshTokenListRelationFilterSchema } from './OAuthRefreshTokenListRelationFilterSchema'
import { RestrictedTokenListRelationFilterSchema } from './RestrictedTokenListRelationFilterSchema'
import { WebhookNullableRelationFilterSchema } from './WebhookNullableRelationFilterSchema'
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema'

export const InstalledIntegrationWhereInputSchema: z.ZodType<Prisma.InstalledIntegrationWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => InstalledIntegrationWhereInputSchema), z.lazy(() => InstalledIntegrationWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => InstalledIntegrationWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => InstalledIntegrationWhereInputSchema), z.lazy(() => InstalledIntegrationWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        integrationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        credentials: z.lazy(() => JsonNullableFilterSchema).optional(),
        user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
        integration: z.union([z.lazy(() => IntegrationRelationFilterSchema), z.lazy(() => IntegrationWhereInputSchema)]).optional(),
        project: z.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)]).optional(),
        refreshTokens: z.lazy(() => OAuthRefreshTokenListRelationFilterSchema).optional(),
        accessTokens: z.lazy(() => RestrictedTokenListRelationFilterSchema).optional(),
        webhook: z
            .union([z.lazy(() => WebhookNullableRelationFilterSchema), z.lazy(() => WebhookWhereInputSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default InstalledIntegrationWhereInputSchema
