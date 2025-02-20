import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AIAssistantSettingsUncheckedCreateInputSchema: z.ZodType<Prisma.AIAssistantSettingsUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  historyRetentionDays: z.number().int().optional(),
  maxQuestionsPerDay: z.number().int().optional().nullable(),
  enableCitations: z.boolean().optional(),
  enableFollowUp: z.boolean().optional(),
  contextWindow: z.number().int().optional(),
  preferredResponseLength: z.string().optional(),
  languageStyle: z.string().optional().nullable(),
  useCustomKnowledge: z.boolean().optional(),
  customKnowledgeIds: z.string().optional().nullable(),
  conversationCount: z.number().int().optional(),
  lastConversationAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default AIAssistantSettingsUncheckedCreateInputSchema;
