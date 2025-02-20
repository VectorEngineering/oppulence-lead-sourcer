import { z } from 'zod'

export const EmailVerificationTokenScalarFieldEnumSchema = z.enum(['identifier', 'token', 'expires'])

export default EmailVerificationTokenScalarFieldEnumSchema
