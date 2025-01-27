import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationConditionOrderByRelevanceFieldEnumSchema } from './AutomationConditionOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const AutomationConditionOrderByRelevanceInputSchema: z.ZodType<Prisma.AutomationConditionOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => AutomationConditionOrderByRelevanceFieldEnumSchema),
            z.lazy(() => AutomationConditionOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default AutomationConditionOrderByRelevanceInputSchema
