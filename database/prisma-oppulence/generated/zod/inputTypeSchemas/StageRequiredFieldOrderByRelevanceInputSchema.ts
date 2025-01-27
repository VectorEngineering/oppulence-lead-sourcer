import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageRequiredFieldOrderByRelevanceFieldEnumSchema } from './StageRequiredFieldOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const StageRequiredFieldOrderByRelevanceInputSchema: z.ZodType<Prisma.StageRequiredFieldOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => StageRequiredFieldOrderByRelevanceFieldEnumSchema),
            z.lazy(() => StageRequiredFieldOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default StageRequiredFieldOrderByRelevanceInputSchema
