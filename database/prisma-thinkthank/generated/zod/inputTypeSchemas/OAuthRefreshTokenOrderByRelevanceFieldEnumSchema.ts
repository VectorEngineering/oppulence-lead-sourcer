import { z } from 'zod';

export const OAuthRefreshTokenOrderByRelevanceFieldEnumSchema = z.enum(['id','installationId','accessTokenId','hashedRefreshToken']);

export default OAuthRefreshTokenOrderByRelevanceFieldEnumSchema;
