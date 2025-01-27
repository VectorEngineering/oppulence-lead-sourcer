import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const AIAssistantSettingsSumOrderByAggregateInputSchema: z.ZodType<Prisma.AIAssistantSettingsSumOrderByAggregateInput> = z
    .object({
        historyRetentionDays: z.lazy(() => SortOrderSchema).optional(),
        maxQuestionsPerDay: z.lazy(() => SortOrderSchema).optional(),
        contextWindow: z.lazy(() => SortOrderSchema).optional(),
        conversationCount: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default AIAssistantSettingsSumOrderByAggregateInputSchema
