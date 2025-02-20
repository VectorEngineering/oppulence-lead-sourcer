import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { RestrictedTokenOrderByWithRelationInputSchema } from './RestrictedTokenOrderByWithRelationInputSchema'
import { InstalledIntegrationOrderByWithRelationInputSchema } from './InstalledIntegrationOrderByWithRelationInputSchema'
import { OAuthRefreshTokenOrderByRelevanceInputSchema } from './OAuthRefreshTokenOrderByRelevanceInputSchema'

export const OAuthRefreshTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.OAuthRefreshTokenOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        installationId: z.lazy(() => SortOrderSchema).optional(),
        accessTokenId: z.lazy(() => SortOrderSchema).optional(),
        hashedRefreshToken: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        accessToken: z.lazy(() => RestrictedTokenOrderByWithRelationInputSchema).optional(),
        installedIntegration: z.lazy(() => InstalledIntegrationOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => OAuthRefreshTokenOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default OAuthRefreshTokenOrderByWithRelationInputSchema
