import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'
import { TokenOrderByRelevanceInputSchema } from './TokenOrderByRelevanceInputSchema'

export const TokenOrderByWithRelationInputSchema: z.ZodType<Prisma.TokenOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        hashedKey: z.lazy(() => SortOrderSchema).optional(),
        partialKey: z.lazy(() => SortOrderSchema).optional(),
        expires: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        lastUsed: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => TokenOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default TokenOrderByWithRelationInputSchema
