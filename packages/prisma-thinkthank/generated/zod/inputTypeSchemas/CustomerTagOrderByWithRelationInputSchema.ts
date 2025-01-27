import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { CustomerOrderByWithRelationInputSchema } from './CustomerOrderByWithRelationInputSchema'
import { TagOrderByWithRelationInputSchema } from './TagOrderByWithRelationInputSchema'
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema'
import { CustomerTagOrderByRelevanceInputSchema } from './CustomerTagOrderByRelevanceInputSchema'

export const CustomerTagOrderByWithRelationInputSchema: z.ZodType<Prisma.CustomerTagOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        customerId: z.lazy(() => SortOrderSchema).optional(),
        tagId: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        customer: z.lazy(() => CustomerOrderByWithRelationInputSchema).optional(),
        tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional(),
        project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => CustomerTagOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default CustomerTagOrderByWithRelationInputSchema
