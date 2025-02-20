import { z } from 'zod';

export const PasswordResetTokenOrderByRelevanceFieldEnumSchema = z.enum(['identifier','token']);

export default PasswordResetTokenOrderByRelevanceFieldEnumSchema;
