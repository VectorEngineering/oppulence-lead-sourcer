import { z } from 'zod';

/////////////////////////////////////////
// O AUTH CODE SCHEMA
/////////////////////////////////////////

export const OAuthCodeSchema = z.object({
  id: z.string().cuid(),
  clientId: z.string(),
  userId: z.string(),
  projectId: z.string(),
  code: z.string(),
  scopes: z.string().nullish(),
  redirectUri: z.string(),
  codeChallenge: z.string().nullish(),
  codeChallengeMethod: z.string().nullish(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type OAuthCode = z.infer<typeof OAuthCodeSchema>

/////////////////////////////////////////
// O AUTH CODE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const OAuthCodeOptionalDefaultsSchema = OAuthCodeSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
}))

export type OAuthCodeOptionalDefaults = z.infer<typeof OAuthCodeOptionalDefaultsSchema>

export default OAuthCodeSchema;
