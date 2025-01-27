import { z } from 'zod';

export const FinancialSettingsScalarFieldEnumSchema = z.enum(['id','userId','defaultCurrency','enableMultiCurrency','supportedCurrencies','plaidEnabled','gocardlessEnabled','allowManualBankEntry','requireBankVerification','stripeEnabled','stripeCardPaymentsCapability','stripeTransfersCapability','activePaymentProviders','providerConfigs','autoCategorizeTxn','minTxnAmount','maxTxnAmount','notifyLargeTransactions','largeTransactionThreshold','notifyFailedSync','notifyLowBalance','lowBalanceThreshold','autoReconciliation','reconciliationWindow','matchingStrategy','syncFrequency','lastSuccessfulSync','syncStatus','createdAt','updatedAt']);

export default FinancialSettingsScalarFieldEnumSchema;
