import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccessRuleConditionOrderByRelevanceFieldEnumSchema } from './AccessRuleConditionOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const AccessRuleConditionOrderByRelevanceInputSchema: z.ZodType<Prisma.AccessRuleConditionOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => AccessRuleConditionOrderByRelevanceFieldEnumSchema),
            z.lazy(() => AccessRuleConditionOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default AccessRuleConditionOrderByRelevanceInputSchema
