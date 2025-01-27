import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AIAssistantSettingsIncludeSchema } from '../inputTypeSchemas/AIAssistantSettingsIncludeSchema'
import { AIAssistantSettingsCreateInputSchema } from '../inputTypeSchemas/AIAssistantSettingsCreateInputSchema'
import { AIAssistantSettingsUncheckedCreateInputSchema } from '../inputTypeSchemas/AIAssistantSettingsUncheckedCreateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AIAssistantSettingsSelectSchema: z.ZodType<Prisma.AIAssistantSettingsSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  historyRetentionDays: z.boolean().optional(),
  maxQuestionsPerDay: z.boolean().optional(),
  enableCitations: z.boolean().optional(),
  enableFollowUp: z.boolean().optional(),
  contextWindow: z.boolean().optional(),
  preferredResponseLength: z.boolean().optional(),
  languageStyle: z.boolean().optional(),
  useCustomKnowledge: z.boolean().optional(),
  customKnowledgeIds: z.boolean().optional(),
  conversationCount: z.boolean().optional(),
  lastConversationAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AIAssistantSettingsCreateArgsSchema: z.ZodType<Prisma.AIAssistantSettingsCreateArgs> = z.object({
  select: AIAssistantSettingsSelectSchema.optional(),
  include: AIAssistantSettingsIncludeSchema.optional(),
  data: z.union([ AIAssistantSettingsCreateInputSchema,AIAssistantSettingsUncheckedCreateInputSchema ]),
}).strict() ;

export default AIAssistantSettingsCreateArgsSchema;
