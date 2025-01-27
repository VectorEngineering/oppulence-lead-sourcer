import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const AIAssistantSettingsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AIAssistantSettingsScalarWhereWithAggregatesInput> =
    z
        .object({
            AND: z
                .union([
                    z.lazy(() => AIAssistantSettingsScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => AIAssistantSettingsScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            OR: z
                .lazy(() => AIAssistantSettingsScalarWhereWithAggregatesInputSchema)
                .array()
                .optional(),
            NOT: z
                .union([
                    z.lazy(() => AIAssistantSettingsScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => AIAssistantSettingsScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            historyRetentionDays: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
            maxQuestionsPerDay: z
                .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
                .optional()
                .nullable(),
            enableCitations: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            enableFollowUp: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            contextWindow: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
            preferredResponseLength: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            languageStyle: z
                .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
                .optional()
                .nullable(),
            useCustomKnowledge: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            customKnowledgeIds: z
                .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
                .optional()
                .nullable(),
            conversationCount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
            lastConversationAt: z
                .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
                .optional()
                .nullable(),
            createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
            updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
        })
        .strict()

export default AIAssistantSettingsScalarWhereWithAggregatesInputSchema
