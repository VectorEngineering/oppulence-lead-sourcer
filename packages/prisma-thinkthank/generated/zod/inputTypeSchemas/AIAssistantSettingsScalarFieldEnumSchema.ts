import { z } from 'zod';

export const AIAssistantSettingsScalarFieldEnumSchema = z.enum(['id','userId','historyRetentionDays','maxQuestionsPerDay','enableCitations','enableFollowUp','contextWindow','preferredResponseLength','languageStyle','useCustomKnowledge','customKnowledgeIds','conversationCount','lastConversationAt','createdAt','updatedAt']);

export default AIAssistantSettingsScalarFieldEnumSchema;
