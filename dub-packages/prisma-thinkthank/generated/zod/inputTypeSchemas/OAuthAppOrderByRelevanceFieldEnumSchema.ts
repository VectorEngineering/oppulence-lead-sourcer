import { z } from 'zod';

export const OAuthAppOrderByRelevanceFieldEnumSchema = z.enum(['id','integrationId','clientId','hashedClientSecret','partialClientSecret']);

export default OAuthAppOrderByRelevanceFieldEnumSchema;
