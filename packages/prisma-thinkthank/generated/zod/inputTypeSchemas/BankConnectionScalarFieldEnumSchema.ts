import { z } from 'zod'

export const BankConnectionScalarFieldEnumSchema = z.enum([
    'id',
    'accessToken',
    'refreshToken',
    'tokenExpiresAt',
    'institutionId',
    'institutionName',
    'name',
    'logoUrl',
    'primaryColor',
    'provider',
    'status',
    'enrollmentId',
    'referenceId',
    'consentId',
    'consentExpiresAt',
    'lastAccessed',
    'lastSuccessfulUpdate',
    'nextUpdateAttempt',
    'updateFrequency',
    'errorDetails',
    'errorRetries',
    'errorCount',
    'lastErrorAt',
    'supportsAccountIdentification',
    'supportsTransactionSync',
    'supportsBalanceRefresh',
    'supportedProducts',
    'expiresAt',
    'projectId',
    'createdAt',
    'updatedAt'
])

export default BankConnectionScalarFieldEnumSchema
