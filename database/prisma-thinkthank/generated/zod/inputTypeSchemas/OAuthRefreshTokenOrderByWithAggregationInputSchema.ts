import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { OAuthRefreshTokenCountOrderByAggregateInputSchema } from './OAuthRefreshTokenCountOrderByAggregateInputSchema'
import { OAuthRefreshTokenMaxOrderByAggregateInputSchema } from './OAuthRefreshTokenMaxOrderByAggregateInputSchema'
import { OAuthRefreshTokenMinOrderByAggregateInputSchema } from './OAuthRefreshTokenMinOrderByAggregateInputSchema'

export const OAuthRefreshTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.OAuthRefreshTokenOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        installationId: z.lazy(() => SortOrderSchema).optional(),
        accessTokenId: z.lazy(() => SortOrderSchema).optional(),
        hashedRefreshToken: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => OAuthRefreshTokenCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => OAuthRefreshTokenMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => OAuthRefreshTokenMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default OAuthRefreshTokenOrderByWithAggregationInputSchema
