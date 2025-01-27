import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationTriggerOrderByRelevanceFieldEnumSchema } from './AutomationTriggerOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const AutomationTriggerOrderByRelevanceInputSchema: z.ZodType<Prisma.AutomationTriggerOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => AutomationTriggerOrderByRelevanceFieldEnumSchema),
            z.lazy(() => AutomationTriggerOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default AutomationTriggerOrderByRelevanceInputSchema
