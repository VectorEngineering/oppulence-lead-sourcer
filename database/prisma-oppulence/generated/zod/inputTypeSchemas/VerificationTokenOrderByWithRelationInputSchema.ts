import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { VerificationTokenOrderByRelevanceInputSchema } from './VerificationTokenOrderByRelevanceInputSchema'

export const VerificationTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithRelationInput> = z
    .object({
        identifier: z.lazy(() => SortOrderSchema).optional(),
        token: z.lazy(() => SortOrderSchema).optional(),
        expires: z.lazy(() => SortOrderSchema).optional(),
        _relevance: z.lazy(() => VerificationTokenOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default VerificationTokenOrderByWithRelationInputSchema
