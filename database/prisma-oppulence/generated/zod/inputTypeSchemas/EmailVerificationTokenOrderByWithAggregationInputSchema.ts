import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { EmailVerificationTokenCountOrderByAggregateInputSchema } from './EmailVerificationTokenCountOrderByAggregateInputSchema'
import { EmailVerificationTokenMaxOrderByAggregateInputSchema } from './EmailVerificationTokenMaxOrderByAggregateInputSchema'
import { EmailVerificationTokenMinOrderByAggregateInputSchema } from './EmailVerificationTokenMinOrderByAggregateInputSchema'

export const EmailVerificationTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.EmailVerificationTokenOrderByWithAggregationInput> =
    z
        .object({
            identifier: z.lazy(() => SortOrderSchema).optional(),
            token: z.lazy(() => SortOrderSchema).optional(),
            expires: z.lazy(() => SortOrderSchema).optional(),
            _count: z.lazy(() => EmailVerificationTokenCountOrderByAggregateInputSchema).optional(),
            _max: z.lazy(() => EmailVerificationTokenMaxOrderByAggregateInputSchema).optional(),
            _min: z.lazy(() => EmailVerificationTokenMinOrderByAggregateInputSchema).optional()
        })
        .strict()

export default EmailVerificationTokenOrderByWithAggregationInputSchema
