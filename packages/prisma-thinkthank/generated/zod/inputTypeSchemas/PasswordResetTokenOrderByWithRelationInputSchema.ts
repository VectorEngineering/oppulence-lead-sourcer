import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { PasswordResetTokenOrderByRelevanceInputSchema } from './PasswordResetTokenOrderByRelevanceInputSchema'

export const PasswordResetTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.PasswordResetTokenOrderByWithRelationInput> = z
    .object({
        identifier: z.lazy(() => SortOrderSchema).optional(),
        token: z.lazy(() => SortOrderSchema).optional(),
        expires: z.lazy(() => SortOrderSchema).optional(),
        _relevance: z.lazy(() => PasswordResetTokenOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default PasswordResetTokenOrderByWithRelationInputSchema
