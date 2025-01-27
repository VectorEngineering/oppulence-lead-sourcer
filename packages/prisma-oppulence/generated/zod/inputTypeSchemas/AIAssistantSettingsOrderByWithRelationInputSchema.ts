import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { AIAssistantSettingsOrderByRelevanceInputSchema } from './AIAssistantSettingsOrderByRelevanceInputSchema';

export const AIAssistantSettingsOrderByWithRelationInputSchema: z.ZodType<Prisma.AIAssistantSettingsOrderByWithRelationInput> = z.object({
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
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => AIAssistantSettingsOrderByRelevanceInputSchema).optional()
}).strict();

export default AIAssistantSettingsOrderByWithRelationInputSchema;
