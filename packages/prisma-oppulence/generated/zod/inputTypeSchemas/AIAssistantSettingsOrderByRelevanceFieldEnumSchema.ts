import { z } from 'zod'

export const AIAssistantSettingsOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'userId',
    'preferredResponseLength',
    'languageStyle',
    'customKnowledgeIds'
])

export default AIAssistantSettingsOrderByRelevanceFieldEnumSchema
