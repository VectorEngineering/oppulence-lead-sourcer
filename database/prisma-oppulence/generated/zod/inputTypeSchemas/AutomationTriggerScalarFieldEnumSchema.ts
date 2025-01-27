import { z } from 'zod'

export const AutomationTriggerScalarFieldEnumSchema = z.enum(['id', 'automationId', 'field', 'operator', 'value'])

export default AutomationTriggerScalarFieldEnumSchema
