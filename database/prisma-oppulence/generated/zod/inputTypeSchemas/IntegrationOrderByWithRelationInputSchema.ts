import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema'
import { OAuthAppOrderByWithRelationInputSchema } from './OAuthAppOrderByWithRelationInputSchema'
import { InstalledIntegrationOrderByRelationAggregateInputSchema } from './InstalledIntegrationOrderByRelationAggregateInputSchema'
import { IntegrationOrderByRelevanceInputSchema } from './IntegrationOrderByRelevanceInputSchema'

export const IntegrationOrderByWithRelationInputSchema: z.ZodType<Prisma.IntegrationOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        userId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        slug: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        readme: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        developer: z.lazy(() => SortOrderSchema).optional(),
        website: z.lazy(() => SortOrderSchema).optional(),
        logo: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        screenshots: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        verified: z.lazy(() => SortOrderSchema).optional(),
        installUrl: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
        project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
        oAuthApp: z.lazy(() => OAuthAppOrderByWithRelationInputSchema).optional(),
        installations: z.lazy(() => InstalledIntegrationOrderByRelationAggregateInputSchema).optional(),
        _relevance: z.lazy(() => IntegrationOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default IntegrationOrderByWithRelationInputSchema
