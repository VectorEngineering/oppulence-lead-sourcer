import { z } from 'zod'

export const AutomationConditionScalarFieldEnumSchema = z.enum(['id', 'automationId', 'field', 'operator', 'value'])

export default AutomationConditionScalarFieldEnumSchema
