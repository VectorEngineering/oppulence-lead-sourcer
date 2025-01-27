import { z } from 'zod'

export const LogScalarFieldEnumSchema = z.enum(['id', 'endpointId', 'type', 'postType', 'message', 'createdAt'])

export default LogScalarFieldEnumSchema
