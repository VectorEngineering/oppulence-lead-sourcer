import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { WebhookOrderByWithRelationInputSchema } from './WebhookOrderByWithRelationInputSchema'
import { WebhookLogOrderByRelevanceInputSchema } from './WebhookLogOrderByRelevanceInputSchema'

export const WebhookLogOrderByWithRelationInputSchema: z.ZodType<Prisma.WebhookLogOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        webhookId: z.lazy(() => SortOrderSchema).optional(),
        requestBody: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        responseBody: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        statusCode: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        duration: z.lazy(() => SortOrderSchema).optional(),
        success: z.lazy(() => SortOrderSchema).optional(),
        errorMessage: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        timestamp: z.lazy(() => SortOrderSchema).optional(),
        webhook: z.lazy(() => WebhookOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => WebhookLogOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default WebhookLogOrderByWithRelationInputSchema
