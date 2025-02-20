import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AIAssistantSettingsCountOrderByAggregateInputSchema } from './AIAssistantSettingsCountOrderByAggregateInputSchema';
import { AIAssistantSettingsAvgOrderByAggregateInputSchema } from './AIAssistantSettingsAvgOrderByAggregateInputSchema';
import { AIAssistantSettingsMaxOrderByAggregateInputSchema } from './AIAssistantSettingsMaxOrderByAggregateInputSchema';
import { AIAssistantSettingsMinOrderByAggregateInputSchema } from './AIAssistantSettingsMinOrderByAggregateInputSchema';
import { AIAssistantSettingsSumOrderByAggregateInputSchema } from './AIAssistantSettingsSumOrderByAggregateInputSchema';

export const AIAssistantSettingsOrderByWithAggregationInputSchema: z.ZodType<Prisma.AIAssistantSettingsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  historyRetentionDays: z.lazy(() => SortOrderSchema).optional(),
  maxQuestionsPerDay: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  enableCitations: z.lazy(() => SortOrderSchema).optional(),
  enableFollowUp: z.lazy(() => SortOrderSchema).optional(),
  contextWindow: z.lazy(() => SortOrderSchema).optional(),
  preferredResponseLength: z.lazy(() => SortOrderSchema).optional(),
  languageStyle: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  useCustomKnowledge: z.lazy(() => SortOrderSchema).optional(),
  customKnowledgeIds: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  conversationCount: z.lazy(() => SortOrderSchema).optional(),
  lastConversationAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AIAssistantSettingsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AIAssistantSettingsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AIAssistantSettingsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AIAssistantSettingsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AIAssistantSettingsSumOrderByAggregateInputSchema).optional()
}).strict();

export default AIAssistantSettingsOrderByWithAggregationInputSchema;
