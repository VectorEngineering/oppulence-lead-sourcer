import { z } from 'zod'

export const InstalledIntegrationOrderByRelevanceFieldEnumSchema = z.enum(['id', 'userId', 'integrationId', 'projectId'])

export default InstalledIntegrationOrderByRelevanceFieldEnumSchema
