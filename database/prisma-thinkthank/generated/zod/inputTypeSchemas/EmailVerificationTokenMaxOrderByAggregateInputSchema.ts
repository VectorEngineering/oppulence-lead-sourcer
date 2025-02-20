import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const EmailVerificationTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EmailVerificationTokenMaxOrderByAggregateInput> = z
    .object({
        identifier: z.lazy(() => SortOrderSchema).optional(),
        token: z.lazy(() => SortOrderSchema).optional(),
        expires: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default EmailVerificationTokenMaxOrderByAggregateInputSchema
