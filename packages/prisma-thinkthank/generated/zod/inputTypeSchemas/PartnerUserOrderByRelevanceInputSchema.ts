import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerUserOrderByRelevanceFieldEnumSchema } from './PartnerUserOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const PartnerUserOrderByRelevanceInputSchema: z.ZodType<Prisma.PartnerUserOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => PartnerUserOrderByRelevanceFieldEnumSchema),
            z.lazy(() => PartnerUserOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default PartnerUserOrderByRelevanceInputSchema
