import { z } from 'zod'

export const AccessRuleConditionOrderByRelevanceFieldEnumSchema = z.enum(['id', 'ruleId', 'field', 'operator', 'value'])

export default AccessRuleConditionOrderByRelevanceFieldEnumSchema
