import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerInviteOrderByRelevanceFieldEnumSchema } from './PartnerInviteOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const PartnerInviteOrderByRelevanceInputSchema: z.ZodType<Prisma.PartnerInviteOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => PartnerInviteOrderByRelevanceFieldEnumSchema),
            z.lazy(() => PartnerInviteOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default PartnerInviteOrderByRelevanceInputSchema
