import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignVariantOrderByRelevanceFieldEnumSchema } from './CampaignVariantOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const CampaignVariantOrderByRelevanceInputSchema: z.ZodType<Prisma.CampaignVariantOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => CampaignVariantOrderByRelevanceFieldEnumSchema),
            z.lazy(() => CampaignVariantOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default CampaignVariantOrderByRelevanceInputSchema
