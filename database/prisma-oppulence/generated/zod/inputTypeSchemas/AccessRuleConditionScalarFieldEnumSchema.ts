import { z } from 'zod'

export const AccessRuleConditionScalarFieldEnumSchema = z.enum(['id', 'ruleId', 'field', 'operator', 'value'])

export default AccessRuleConditionScalarFieldEnumSchema
