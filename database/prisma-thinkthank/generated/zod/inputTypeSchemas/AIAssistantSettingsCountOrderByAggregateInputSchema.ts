import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const AIAssistantSettingsCountOrderByAggregateInputSchema: z.ZodType<Prisma.AIAssistantSettingsCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        historyRetentionDays: z.lazy(() => SortOrderSchema).optional(),
        maxQuestionsPerDay: z.lazy(() => SortOrderSchema).optional(),
        enableCitations: z.lazy(() => SortOrderSchema).optional(),
        enableFollowUp: z.lazy(() => SortOrderSchema).optional(),
        contextWindow: z.lazy(() => SortOrderSchema).optional(),
        preferredResponseLength: z.lazy(() => SortOrderSchema).optional(),
        languageStyle: z.lazy(() => SortOrderSchema).optional(),
        useCustomKnowledge: z.lazy(() => SortOrderSchema).optional(),
        customKnowledgeIds: z.lazy(() => SortOrderSchema).optional(),
        conversationCount: z.lazy(() => SortOrderSchema).optional(),
        lastConversationAt: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default AIAssistantSettingsCountOrderByAggregateInputSchema
