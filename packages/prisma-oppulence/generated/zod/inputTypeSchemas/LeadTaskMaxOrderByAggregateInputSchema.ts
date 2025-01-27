import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadTaskMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LeadTaskMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        title: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        priority: z.lazy(() => SortOrderSchema).optional(),
        dueDate: z.lazy(() => SortOrderSchema).optional(),
        completedAt: z.lazy(() => SortOrderSchema).optional(),
        assignedToId: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.lazy(() => SortOrderSchema).optional(),
        updatedBy: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadTaskMaxOrderByAggregateInputSchema
