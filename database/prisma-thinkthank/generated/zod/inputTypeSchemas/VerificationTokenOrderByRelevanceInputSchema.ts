import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { VerificationTokenOrderByRelevanceFieldEnumSchema } from './VerificationTokenOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const VerificationTokenOrderByRelevanceInputSchema: z.ZodType<Prisma.VerificationTokenOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => VerificationTokenOrderByRelevanceFieldEnumSchema),
            z.lazy(() => VerificationTokenOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default VerificationTokenOrderByRelevanceInputSchema
