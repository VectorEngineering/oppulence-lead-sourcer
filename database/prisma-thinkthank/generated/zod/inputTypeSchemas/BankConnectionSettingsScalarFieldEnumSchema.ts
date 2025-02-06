import { z } from 'zod';

export const BankConnectionSettingsScalarFieldEnumSchema = z.enum(['id','syncEnabled','syncStartTime','syncDayOfWeek','syncDayOfMonth','syncFrequency','connectionTimeout','readTimeout','maxRequestsPerHour','maxConcurrentRequests','syncTransactions','syncBalances','syncStatements','syncIdentity','syncCategories','syncMerchants','syncAttachments','historicalDays','refreshTokenEnabled','autoReconnectEnabled','connectionStatus','bankConnectionId','createdAt','updatedAt','createdBy','merchantEnrichmentEnabled','merchantCategorizationEnabled','merchantLogoEnrichmentEnabled','merchantNameCleaningEnabled']);

export default BankConnectionSettingsScalarFieldEnumSchema;
