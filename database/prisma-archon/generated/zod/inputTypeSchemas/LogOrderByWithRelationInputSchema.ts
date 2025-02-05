import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { EndpointOrderByWithRelationInputSchema } from './EndpointOrderByWithRelationInputSchema'
import { LogOrderByRelevanceInputSchema } from './LogOrderByRelevanceInputSchema'

export const LogOrderByWithRelationInputSchema: z.ZodType<Prisma.LogOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        endpointId: z.lazy(() => SortOrderSchema).optional(),
        type: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        postType: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        message: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        endpoint: z.lazy(() => EndpointOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => LogOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default LogOrderByWithRelationInputSchema
