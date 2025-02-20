import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionSettingsOrderByRelevanceFieldEnumSchema } from './BankConnectionSettingsOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const BankConnectionSettingsOrderByRelevanceInputSchema: z.ZodType<Prisma.BankConnectionSettingsOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => BankConnectionSettingsOrderByRelevanceFieldEnumSchema),
            z.lazy(() => BankConnectionSettingsOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default BankConnectionSettingsOrderByRelevanceInputSchema
