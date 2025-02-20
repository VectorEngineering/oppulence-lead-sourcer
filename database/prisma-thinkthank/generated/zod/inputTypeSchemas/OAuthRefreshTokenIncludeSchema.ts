import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { RestrictedTokenArgsSchema } from '../outputTypeSchemas/RestrictedTokenArgsSchema'
import { InstalledIntegrationArgsSchema } from '../outputTypeSchemas/InstalledIntegrationArgsSchema'

export const OAuthRefreshTokenIncludeSchema: z.ZodType<Prisma.OAuthRefreshTokenInclude> = z
    .object({
        accessToken: z.union([z.boolean(), z.lazy(() => RestrictedTokenArgsSchema)]).optional(),
        installedIntegration: z.union([z.boolean(), z.lazy(() => InstalledIntegrationArgsSchema)]).optional()
    })
    .strict()

export default OAuthRefreshTokenIncludeSchema
