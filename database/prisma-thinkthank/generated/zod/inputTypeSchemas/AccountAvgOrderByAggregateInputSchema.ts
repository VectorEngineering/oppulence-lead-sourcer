import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> = z
    .object({
        refresh_token_expires_in: z.lazy(() => SortOrderSchema).optional(),
        expires_at: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default AccountAvgOrderByAggregateInputSchema
