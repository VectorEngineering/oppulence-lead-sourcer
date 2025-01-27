import { z } from 'zod'

export const StageRequiredFieldScalarFieldEnumSchema = z.enum(['id', 'stageId', 'fieldName', 'errorMessage'])

export default StageRequiredFieldScalarFieldEnumSchema
