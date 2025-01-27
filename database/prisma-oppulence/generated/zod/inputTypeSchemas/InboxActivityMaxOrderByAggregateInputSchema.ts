import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const InboxActivityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InboxActivityMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        inboxId: z.lazy(() => SortOrderSchema).optional(),
        action: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.lazy(() => SortOrderSchema).optional(),
        ipAddress: z.lazy(() => SortOrderSchema).optional(),
        userAgent: z.lazy(() => SortOrderSchema).optional(),
        sessionId: z.lazy(() => SortOrderSchema).optional(),
        requestId: z.lazy(() => SortOrderSchema).optional(),
        success: z.lazy(() => SortOrderSchema).optional(),
        severity: z.lazy(() => SortOrderSchema).optional(),
        source: z.lazy(() => SortOrderSchema).optional(),
        location: z.lazy(() => SortOrderSchema).optional(),
        riskScore: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default InboxActivityMaxOrderByAggregateInputSchema
