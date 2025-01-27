import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'
import { IntegrationOrderByWithRelationInputSchema } from './IntegrationOrderByWithRelationInputSchema'
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema'
import { OAuthRefreshTokenOrderByRelationAggregateInputSchema } from './OAuthRefreshTokenOrderByRelationAggregateInputSchema'
import { RestrictedTokenOrderByRelationAggregateInputSchema } from './RestrictedTokenOrderByRelationAggregateInputSchema'
import { WebhookOrderByWithRelationInputSchema } from './WebhookOrderByWithRelationInputSchema'
import { InstalledIntegrationOrderByRelevanceInputSchema } from './InstalledIntegrationOrderByRelevanceInputSchema'

export const InstalledIntegrationOrderByWithRelationInputSchema: z.ZodType<Prisma.InstalledIntegrationOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        integrationId: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        credentials: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
        integration: z.lazy(() => IntegrationOrderByWithRelationInputSchema).optional(),
        project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
        refreshTokens: z.lazy(() => OAuthRefreshTokenOrderByRelationAggregateInputSchema).optional(),
        accessTokens: z.lazy(() => RestrictedTokenOrderByRelationAggregateInputSchema).optional(),
        webhook: z.lazy(() => WebhookOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => InstalledIntegrationOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default InstalledIntegrationOrderByWithRelationInputSchema
