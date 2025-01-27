import { z } from 'zod';

/////////////////////////////////////////
// AI ASSISTANT SETTINGS SCHEMA
/////////////////////////////////////////

export const AIAssistantSettingsSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  historyRetentionDays: z.number().int(),
  maxQuestionsPerDay: z.number().int().nullish(),
  enableCitations: z.boolean(),
  enableFollowUp: z.boolean(),
  contextWindow: z.number().int(),
  preferredResponseLength: z.string(),
  languageStyle: z.string().nullish(),
  useCustomKnowledge: z.boolean(),
  customKnowledgeIds: z.string().nullish(),
  conversationCount: z.number().int(),
  lastConversationAt: z.coerce.date().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type AIAssistantSettings = z.infer<typeof AIAssistantSettingsSchema>

/////////////////////////////////////////
// AI ASSISTANT SETTINGS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const AIAssistantSettingsOptionalDefaultsSchema = AIAssistantSettingsSchema.merge(z.object({
  id: z.string().cuid().optional(),
  historyRetentionDays: z.number().int().optional(),
  enableCitations: z.boolean().optional(),
  enableFollowUp: z.boolean().optional(),
  contextWindow: z.number().int().optional(),
  preferredResponseLength: z.string().optional(),
  useCustomKnowledge: z.boolean().optional(),
  conversationCount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type AIAssistantSettingsOptionalDefaults = z.infer<typeof AIAssistantSettingsOptionalDefaultsSchema>

export default AIAssistantSettingsSchema;
