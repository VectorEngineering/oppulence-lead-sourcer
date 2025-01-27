import { z } from 'zod';

export const FinancialSettingsOrderByRelevanceFieldEnumSchema = z.enum(['id','userId','supportedCurrencies','stripeCardPaymentsCapability','stripeTransfersCapability','activePaymentProviders','providerConfigs','syncStatus']);

export default FinancialSettingsOrderByRelevanceFieldEnumSchema;
