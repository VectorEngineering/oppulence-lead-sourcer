import { z } from 'zod';
import { BankProviderSchema } from '../inputTypeSchemas/BankProviderSchema'
import { ConnectionStatusSchema } from '../inputTypeSchemas/ConnectionStatusSchema'

/////////////////////////////////////////
// BANK CONNECTION SCHEMA
/////////////////////////////////////////

export const BankConnectionSchema = z.object({
  provider: BankProviderSchema.nullish(),
  status: ConnectionStatusSchema,
  id: z.string().cuid(),
  accessToken: z.string().nullish(),
  refreshToken: z.string().nullish(),
  tokenExpiresAt: z.coerce.date().nullish(),
  institutionId: z.string(),
  institutionName: z.string(),
  name: z.string(),
  logoUrl: z.string().nullish(),
  primaryColor: z.string().nullish(),
  enrollmentId: z.string().nullish(),
  referenceId: z.string().nullish(),
  consentId: z.string().nullish(),
  consentExpiresAt: z.coerce.date().nullish(),
  lastAccessed: z.coerce.date().nullish(),
  lastSuccessfulUpdate: z.coerce.date().nullish(),
  nextUpdateAttempt: z.coerce.date().nullish(),
  updateFrequency: z.string().nullish(),
  errorDetails: z.string().nullish(),
  errorRetries: z.number().int().nullish(),
  errorCount: z.number().int(),
  lastErrorAt: z.coerce.date().nullish(),
  supportsAccountIdentification: z.boolean(),
  supportsTransactionSync: z.boolean(),
  supportsBalanceRefresh: z.boolean(),
  supportedProducts: z.string(),
  expiresAt: z.coerce.date().nullish(),
  projectId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BankConnection = z.infer<typeof BankConnectionSchema>

/////////////////////////////////////////
// BANK CONNECTION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const BankConnectionOptionalDefaultsSchema = BankConnectionSchema.merge(z.object({
  status: ConnectionStatusSchema.optional(),
  id: z.string().cuid().optional(),
  errorCount: z.number().int().optional(),
  supportsAccountIdentification: z.boolean().optional(),
  supportsTransactionSync: z.boolean().optional(),
  supportsBalanceRefresh: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type BankConnectionOptionalDefaults = z.infer<typeof BankConnectionOptionalDefaultsSchema>

export default BankConnectionSchema;
