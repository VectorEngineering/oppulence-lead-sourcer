import { z } from 'zod';
import { SyncFrequencySchema } from '../inputTypeSchemas/SyncFrequencySchema'
import { ConnectionStatusSchema } from '../inputTypeSchemas/ConnectionStatusSchema'

/////////////////////////////////////////
// BANK CONNECTION SETTINGS SCHEMA
/////////////////////////////////////////

export const BankConnectionSettingsSchema = z.object({
  syncFrequency: SyncFrequencySchema,
  connectionStatus: ConnectionStatusSchema,
  id: z.string().cuid(),
  syncEnabled: z.boolean(),
  syncStartTime: z.string().nullish(),
  syncDayOfWeek: z.number().int(),
  syncDayOfMonth: z.number().int(),
  connectionTimeout: z.number().int(),
  readTimeout: z.number().int(),
  maxRequestsPerHour: z.number().int(),
  maxConcurrentRequests: z.number().int(),
  syncTransactions: z.boolean(),
  syncBalances: z.boolean(),
  syncStatements: z.boolean(),
  syncIdentity: z.boolean(),
  syncCategories: z.boolean(),
  syncMerchants: z.boolean(),
  syncAttachments: z.boolean(),
  historicalDays: z.number().int(),
  refreshTokenEnabled: z.boolean(),
  autoReconnectEnabled: z.boolean(),
  bankConnectionId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  createdBy: z.string(),
  merchantEnrichmentEnabled: z.boolean(),
  merchantCategorizationEnabled: z.boolean(),
  merchantLogoEnrichmentEnabled: z.boolean(),
  merchantNameCleaningEnabled: z.boolean(),
})

export type BankConnectionSettings = z.infer<typeof BankConnectionSettingsSchema>

/////////////////////////////////////////
// BANK CONNECTION SETTINGS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const BankConnectionSettingsOptionalDefaultsSchema = BankConnectionSettingsSchema.merge(z.object({
  syncFrequency: SyncFrequencySchema.optional(),
  connectionStatus: ConnectionStatusSchema.optional(),
  id: z.string().cuid().optional(),
  syncEnabled: z.boolean().optional(),
  syncDayOfWeek: z.number().int().optional(),
  syncDayOfMonth: z.number().int().optional(),
  connectionTimeout: z.number().int().optional(),
  readTimeout: z.number().int().optional(),
  maxRequestsPerHour: z.number().int().optional(),
  maxConcurrentRequests: z.number().int().optional(),
  syncTransactions: z.boolean().optional(),
  syncBalances: z.boolean().optional(),
  syncStatements: z.boolean().optional(),
  syncIdentity: z.boolean().optional(),
  syncCategories: z.boolean().optional(),
  syncMerchants: z.boolean().optional(),
  syncAttachments: z.boolean().optional(),
  historicalDays: z.number().int().optional(),
  refreshTokenEnabled: z.boolean().optional(),
  autoReconnectEnabled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchantEnrichmentEnabled: z.boolean().optional(),
  merchantCategorizationEnabled: z.boolean().optional(),
  merchantLogoEnrichmentEnabled: z.boolean().optional(),
  merchantNameCleaningEnabled: z.boolean().optional(),
}))

export type BankConnectionSettingsOptionalDefaults = z.infer<typeof BankConnectionSettingsOptionalDefaultsSchema>

export default BankConnectionSettingsSchema;
