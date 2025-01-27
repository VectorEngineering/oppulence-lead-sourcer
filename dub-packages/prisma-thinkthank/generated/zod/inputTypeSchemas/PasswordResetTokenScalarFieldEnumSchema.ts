import { z } from 'zod';

export const PasswordResetTokenScalarFieldEnumSchema = z.enum(['identifier','token','expires']);

export default PasswordResetTokenScalarFieldEnumSchema;
