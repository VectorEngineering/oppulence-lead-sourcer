import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerOrderByRelevanceFieldEnumSchema } from './PartnerOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const PartnerOrderByRelevanceInputSchema: z.ZodType<Prisma.PartnerOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => PartnerOrderByRelevanceFieldEnumSchema),
            z.lazy(() => PartnerOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default PartnerOrderByRelevanceInputSchema
