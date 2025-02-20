import { z } from 'zod';

export const OAuthCodeOrderByRelevanceFieldEnumSchema = z.enum(['id','clientId','userId','projectId','code','scopes','redirectUri','codeChallenge','codeChallengeMethod']);

export default OAuthCodeOrderByRelevanceFieldEnumSchema;
