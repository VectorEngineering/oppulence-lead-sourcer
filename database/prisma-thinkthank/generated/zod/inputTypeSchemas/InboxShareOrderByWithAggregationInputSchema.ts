import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { InboxShareCountOrderByAggregateInputSchema } from './InboxShareCountOrderByAggregateInputSchema'
import { InboxShareAvgOrderByAggregateInputSchema } from './InboxShareAvgOrderByAggregateInputSchema'
import { InboxShareMaxOrderByAggregateInputSchema } from './InboxShareMaxOrderByAggregateInputSchema'
import { InboxShareMinOrderByAggregateInputSchema } from './InboxShareMinOrderByAggregateInputSchema'
import { InboxShareSumOrderByAggregateInputSchema } from './InboxShareSumOrderByAggregateInputSchema'

export const InboxShareOrderByWithAggregationInputSchema: z.ZodType<Prisma.InboxShareOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        inboxId: z.lazy(() => SortOrderSchema).optional(),
        userId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        email: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        accessLevel: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        password: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        lastAccessed: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        accessCount: z.lazy(() => SortOrderSchema).optional(),
        maxAccesses: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        ipRestriction: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        domainRestriction: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        deviceLimit: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        requireMFA: z.lazy(() => SortOrderSchema).optional(),
        notifyOnAccess: z.lazy(() => SortOrderSchema).optional(),
        accessSchedule: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        revokedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        revokedBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        revokeReason: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => InboxShareCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => InboxShareAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => InboxShareMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => InboxShareMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => InboxShareSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default InboxShareOrderByWithAggregationInputSchema
