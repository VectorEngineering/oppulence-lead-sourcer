import { z } from 'zod';

/////////////////////////////////////////
// O AUTH REFRESH TOKEN SCHEMA
/////////////////////////////////////////

export const OAuthRefreshTokenSchema = z.object({
  id: z.string().cuid(),
  installationId: z.string(),
  accessTokenId: z.string(),
  hashedRefreshToken: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type OAuthRefreshToken = z.infer<typeof OAuthRefreshTokenSchema>

/////////////////////////////////////////
// O AUTH REFRESH TOKEN OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const OAuthRefreshTokenOptionalDefaultsSchema = OAuthRefreshTokenSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
}))

export type OAuthRefreshTokenOptionalDefaults = z.infer<typeof OAuthRefreshTokenOptionalDefaultsSchema>

export default OAuthRefreshTokenSchema;
