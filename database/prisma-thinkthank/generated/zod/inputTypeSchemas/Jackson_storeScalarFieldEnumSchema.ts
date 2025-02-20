import { z } from 'zod'

export const Jackson_storeScalarFieldEnumSchema = z.enum(['key', 'value', 'iv', 'tag', 'namespace', 'createdAt', 'modifiedAt'])

export default Jackson_storeScalarFieldEnumSchema
