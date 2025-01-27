import { z } from 'zod'

export const AutomationTriggerOrderByRelevanceFieldEnumSchema = z.enum(['id', 'automationId', 'field', 'operator', 'value'])

export default AutomationTriggerOrderByRelevanceFieldEnumSchema
