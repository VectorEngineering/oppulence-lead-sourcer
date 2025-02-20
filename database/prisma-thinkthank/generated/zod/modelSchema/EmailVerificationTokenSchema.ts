import { z } from 'zod'

/////////////////////////////////////////
// EMAIL VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////

export const EmailVerificationTokenSchema = z.object({
    identifier: z.string(),
    token: z.string(),
    expires: z.coerce.date()
})

export type EmailVerificationToken = z.infer<typeof EmailVerificationTokenSchema>

/////////////////////////////////////////
// EMAIL VERIFICATION TOKEN OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const EmailVerificationTokenOptionalDefaultsSchema = EmailVerificationTokenSchema.merge(z.object({}))

export type EmailVerificationTokenOptionalDefaults = z.infer<typeof EmailVerificationTokenOptionalDefaultsSchema>

export default EmailVerificationTokenSchema
