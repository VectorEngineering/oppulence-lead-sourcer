import { z } from 'zod';

export const OAuthAppScalarFieldEnumSchema = z.enum(['id','integrationId','clientId','hashedClientSecret','partialClientSecret','redirectUris','pkce']);

export default OAuthAppScalarFieldEnumSchema;
