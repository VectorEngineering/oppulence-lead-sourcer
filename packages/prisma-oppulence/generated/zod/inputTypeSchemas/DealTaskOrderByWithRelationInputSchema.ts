import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { DealOrderByWithRelationInputSchema } from './DealOrderByWithRelationInputSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'
import { DealTaskOrderByRelevanceInputSchema } from './DealTaskOrderByRelevanceInputSchema'

export const DealTaskOrderByWithRelationInputSchema: z.ZodType<Prisma.DealTaskOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        dealId: z.lazy(() => SortOrderSchema).optional(),
        title: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        dueDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        priority: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        completedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        assignedToId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        deal: z.lazy(() => DealOrderByWithRelationInputSchema).optional(),
        assignedTo: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => DealTaskOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default DealTaskOrderByWithRelationInputSchema
