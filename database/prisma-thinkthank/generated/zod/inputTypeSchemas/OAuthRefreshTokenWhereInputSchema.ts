import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { RestrictedTokenRelationFilterSchema } from './RestrictedTokenRelationFilterSchema'
import { RestrictedTokenWhereInputSchema } from './RestrictedTokenWhereInputSchema'
import { InstalledIntegrationRelationFilterSchema } from './InstalledIntegrationRelationFilterSchema'
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema'

export const OAuthRefreshTokenWhereInputSchema: z.ZodType<Prisma.OAuthRefreshTokenWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => OAuthRefreshTokenWhereInputSchema), z.lazy(() => OAuthRefreshTokenWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => OAuthRefreshTokenWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => OAuthRefreshTokenWhereInputSchema), z.lazy(() => OAuthRefreshTokenWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        installationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        accessTokenId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        hashedRefreshToken: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        expiresAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        accessToken: z.union([z.lazy(() => RestrictedTokenRelationFilterSchema), z.lazy(() => RestrictedTokenWhereInputSchema)]).optional(),
        installedIntegration: z
            .union([z.lazy(() => InstalledIntegrationRelationFilterSchema), z.lazy(() => InstalledIntegrationWhereInputSchema)])
            .optional()
    })
    .strict()

export default OAuthRefreshTokenWhereInputSchema
