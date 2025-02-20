import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const IntegrationMinOrderByAggregateInputSchema: z.ZodType<Prisma.IntegrationMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        slug: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        readme: z.lazy(() => SortOrderSchema).optional(),
        developer: z.lazy(() => SortOrderSchema).optional(),
        website: z.lazy(() => SortOrderSchema).optional(),
        logo: z.lazy(() => SortOrderSchema).optional(),
        verified: z.lazy(() => SortOrderSchema).optional(),
        installUrl: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default IntegrationMinOrderByAggregateInputSchema
