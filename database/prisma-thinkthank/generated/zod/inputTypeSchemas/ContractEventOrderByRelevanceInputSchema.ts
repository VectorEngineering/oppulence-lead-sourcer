import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractEventOrderByRelevanceFieldEnumSchema } from './ContractEventOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const ContractEventOrderByRelevanceInputSchema: z.ZodType<Prisma.ContractEventOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => ContractEventOrderByRelevanceFieldEnumSchema),
            z.lazy(() => ContractEventOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default ContractEventOrderByRelevanceInputSchema
