import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { WebhookCountOrderByAggregateInputSchema } from './WebhookCountOrderByAggregateInputSchema'
import { WebhookAvgOrderByAggregateInputSchema } from './WebhookAvgOrderByAggregateInputSchema'
import { WebhookMaxOrderByAggregateInputSchema } from './WebhookMaxOrderByAggregateInputSchema'
import { WebhookMinOrderByAggregateInputSchema } from './WebhookMinOrderByAggregateInputSchema'
import { WebhookSumOrderByAggregateInputSchema } from './WebhookSumOrderByAggregateInputSchema'

export const WebhookOrderByWithAggregationInputSchema: z.ZodType<Prisma.WebhookOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        installationId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        receiver: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        url: z.lazy(() => SortOrderSchema).optional(),
        secret: z.lazy(() => SortOrderSchema).optional(),
        triggers: z.lazy(() => SortOrderSchema).optional(),
        consecutiveFailures: z.lazy(() => SortOrderSchema).optional(),
        lastFailedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        disabledAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        maxRetries: z.lazy(() => SortOrderSchema).optional(),
        lastErrorMessage: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        timeout: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        verificationToken: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        ipWhitelist: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        rateLimitPerMinute: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => WebhookCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => WebhookAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => WebhookMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => WebhookMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => WebhookSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default WebhookOrderByWithAggregationInputSchema
