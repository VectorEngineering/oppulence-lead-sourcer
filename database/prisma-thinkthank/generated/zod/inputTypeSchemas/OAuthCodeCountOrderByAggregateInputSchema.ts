import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const OAuthCodeCountOrderByAggregateInputSchema: z.ZodType<Prisma.OAuthCodeCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        clientId: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        code: z.lazy(() => SortOrderSchema).optional(),
        scopes: z.lazy(() => SortOrderSchema).optional(),
        redirectUri: z.lazy(() => SortOrderSchema).optional(),
        codeChallenge: z.lazy(() => SortOrderSchema).optional(),
        codeChallengeMethod: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default OAuthCodeCountOrderByAggregateInputSchema
