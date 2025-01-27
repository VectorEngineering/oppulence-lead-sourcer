import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { EmailVerificationTokenOrderByRelevanceInputSchema } from './EmailVerificationTokenOrderByRelevanceInputSchema'

export const EmailVerificationTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.EmailVerificationTokenOrderByWithRelationInput> = z
    .object({
        identifier: z.lazy(() => SortOrderSchema).optional(),
        token: z.lazy(() => SortOrderSchema).optional(),
        expires: z.lazy(() => SortOrderSchema).optional(),
        _relevance: z.lazy(() => EmailVerificationTokenOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default EmailVerificationTokenOrderByWithRelationInputSchema
