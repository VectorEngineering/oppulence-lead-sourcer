import { z } from 'zod'

export const AppOrderByRelevanceFieldEnumSchema = z.enum(['id', 'appId', 'createdBy', 'userId', 'projectId'])

export default AppOrderByRelevanceFieldEnumSchema
