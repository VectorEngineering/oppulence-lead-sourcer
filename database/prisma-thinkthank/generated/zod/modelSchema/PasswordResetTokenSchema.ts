import { z } from 'zod';

/////////////////////////////////////////
// PASSWORD RESET TOKEN SCHEMA
/////////////////////////////////////////

export const PasswordResetTokenSchema = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
})

export type PasswordResetToken = z.infer<typeof PasswordResetTokenSchema>

/////////////////////////////////////////
// PASSWORD RESET TOKEN OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PasswordResetTokenOptionalDefaultsSchema = PasswordResetTokenSchema.merge(z.object({
}))

export type PasswordResetTokenOptionalDefaults = z.infer<typeof PasswordResetTokenOptionalDefaultsSchema>

export default PasswordResetTokenSchema;
