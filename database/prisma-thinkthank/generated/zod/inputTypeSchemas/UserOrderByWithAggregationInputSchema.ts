import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { UserCountOrderByAggregateInputSchema } from './UserCountOrderByAggregateInputSchema'
import { UserAvgOrderByAggregateInputSchema } from './UserAvgOrderByAggregateInputSchema'
import { UserMaxOrderByAggregateInputSchema } from './UserMaxOrderByAggregateInputSchema'
import { UserMinOrderByAggregateInputSchema } from './UserMinOrderByAggregateInputSchema'
import { UserSumOrderByAggregateInputSchema } from './UserSumOrderByAggregateInputSchema'

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        email: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        emailVerified: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        image: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        isMachine: z.lazy(() => SortOrderSchema).optional(),
        passwordHash: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        invalidLoginAttempts: z.lazy(() => SortOrderSchema).optional(),
        lockedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        subscribed: z.lazy(() => SortOrderSchema).optional(),
        source: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        defaultWorkspace: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        defaultPartnerId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        referralLinkId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        fullName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        dateFormat: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        locale: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        timeFormat: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        timezone: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        weekStartsOnMonday: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => UserAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => UserSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default UserOrderByWithAggregationInputSchema
