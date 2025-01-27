import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { OAuthCodeOrderByRelationAggregateInputSchema } from './OAuthCodeOrderByRelationAggregateInputSchema'
import { IntegrationOrderByWithRelationInputSchema } from './IntegrationOrderByWithRelationInputSchema'
import { OAuthAppOrderByRelevanceInputSchema } from './OAuthAppOrderByRelevanceInputSchema'

export const OAuthAppOrderByWithRelationInputSchema: z.ZodType<Prisma.OAuthAppOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        integrationId: z.lazy(() => SortOrderSchema).optional(),
        clientId: z.lazy(() => SortOrderSchema).optional(),
        hashedClientSecret: z.lazy(() => SortOrderSchema).optional(),
        partialClientSecret: z.lazy(() => SortOrderSchema).optional(),
        redirectUris: z.lazy(() => SortOrderSchema).optional(),
        pkce: z.lazy(() => SortOrderSchema).optional(),
        oAuthCodes: z.lazy(() => OAuthCodeOrderByRelationAggregateInputSchema).optional(),
        integration: z.lazy(() => IntegrationOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => OAuthAppOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default OAuthAppOrderByWithRelationInputSchema
