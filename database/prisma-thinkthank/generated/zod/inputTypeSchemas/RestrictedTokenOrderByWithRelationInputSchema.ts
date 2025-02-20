import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema'
import { OAuthRefreshTokenOrderByRelationAggregateInputSchema } from './OAuthRefreshTokenOrderByRelationAggregateInputSchema'
import { InstalledIntegrationOrderByWithRelationInputSchema } from './InstalledIntegrationOrderByWithRelationInputSchema'
import { RestrictedTokenOrderByRelevanceInputSchema } from './RestrictedTokenOrderByRelevanceInputSchema'

export const RestrictedTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.RestrictedTokenOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        hashedKey: z.lazy(() => SortOrderSchema).optional(),
        partialKey: z.lazy(() => SortOrderSchema).optional(),
        scopes: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        expires: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        lastUsed: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        rateLimit: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        installationId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
        project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
        refreshTokens: z.lazy(() => OAuthRefreshTokenOrderByRelationAggregateInputSchema).optional(),
        installedIntegration: z.lazy(() => InstalledIntegrationOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => RestrictedTokenOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default RestrictedTokenOrderByWithRelationInputSchema
