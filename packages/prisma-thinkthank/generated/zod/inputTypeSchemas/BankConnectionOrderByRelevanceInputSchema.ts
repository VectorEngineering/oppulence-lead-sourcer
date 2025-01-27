import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionOrderByRelevanceFieldEnumSchema } from './BankConnectionOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const BankConnectionOrderByRelevanceInputSchema: z.ZodType<Prisma.BankConnectionOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => BankConnectionOrderByRelevanceFieldEnumSchema),
            z.lazy(() => BankConnectionOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default BankConnectionOrderByRelevanceInputSchema
