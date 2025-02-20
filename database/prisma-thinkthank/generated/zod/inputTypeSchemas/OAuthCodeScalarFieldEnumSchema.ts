import { z } from 'zod'

export const OAuthCodeScalarFieldEnumSchema = z.enum([
    'id',
    'clientId',
    'userId',
    'projectId',
    'code',
    'scopes',
    'redirectUri',
    'codeChallenge',
    'codeChallengeMethod',
    'expiresAt',
    'createdAt'
])

export default OAuthCodeScalarFieldEnumSchema
