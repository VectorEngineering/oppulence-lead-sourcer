import { z } from 'zod';

export const OAuthRefreshTokenScalarFieldEnumSchema = z.enum(['id','installationId','accessTokenId','hashedRefreshToken','expiresAt','createdAt']);

export default OAuthRefreshTokenScalarFieldEnumSchema;
