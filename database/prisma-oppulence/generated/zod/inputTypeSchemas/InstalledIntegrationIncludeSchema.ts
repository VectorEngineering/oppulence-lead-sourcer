import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { IntegrationArgsSchema } from '../outputTypeSchemas/IntegrationArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { OAuthRefreshTokenFindManyArgsSchema } from '../outputTypeSchemas/OAuthRefreshTokenFindManyArgsSchema'
import { RestrictedTokenFindManyArgsSchema } from '../outputTypeSchemas/RestrictedTokenFindManyArgsSchema'
import { WebhookArgsSchema } from '../outputTypeSchemas/WebhookArgsSchema'
import { InstalledIntegrationCountOutputTypeArgsSchema } from '../outputTypeSchemas/InstalledIntegrationCountOutputTypeArgsSchema'

export const InstalledIntegrationIncludeSchema: z.ZodType<Prisma.InstalledIntegrationInclude> = z
    .object({
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        integration: z.union([z.boolean(), z.lazy(() => IntegrationArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        refreshTokens: z.union([z.boolean(), z.lazy(() => OAuthRefreshTokenFindManyArgsSchema)]).optional(),
        accessTokens: z.union([z.boolean(), z.lazy(() => RestrictedTokenFindManyArgsSchema)]).optional(),
        webhook: z.union([z.boolean(), z.lazy(() => WebhookArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => InstalledIntegrationCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default InstalledIntegrationIncludeSchema
