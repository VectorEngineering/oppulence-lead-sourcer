import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { CurrencySchema } from './CurrencySchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { MatchingStrategySchema } from './MatchingStrategySchema';
import { SyncFrequencySchema } from './SyncFrequencySchema';

export const FinancialSettingsCreateWithoutUserInputSchema: z.ZodType<Prisma.FinancialSettingsCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  defaultCurrency: z.lazy(() => CurrencySchema).optional(),
  enableMultiCurrency: z.boolean().optional(),
  supportedCurrencies: z.string().optional().nullable(),
  plaidEnabled: z.boolean().optional(),
  gocardlessEnabled: z.boolean().optional(),
  allowManualBankEntry: z.boolean().optional(),
  requireBankVerification: z.boolean().optional(),
  stripeEnabled: z.boolean().optional(),
  stripeCardPaymentsCapability: z.string().optional().nullable(),
  stripeTransfersCapability: z.string().optional().nullable(),
  activePaymentProviders: z.string().optional().nullable(),
  providerConfigs: z.string().optional().nullable(),
  autoCategorizeTxn: z.boolean().optional(),
  minTxnAmount: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  maxTxnAmount: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  notifyLargeTransactions: z.boolean().optional(),
  largeTransactionThreshold: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  notifyFailedSync: z.boolean().optional(),
  notifyLowBalance: z.boolean().optional(),
  lowBalanceThreshold: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  autoReconciliation: z.boolean().optional(),
  reconciliationWindow: z.number().int().optional(),
  matchingStrategy: z.lazy(() => MatchingStrategySchema).optional(),
  syncFrequency: z.lazy(() => SyncFrequencySchema).optional(),
  lastSuccessfulSync: z.coerce.date().optional().nullable(),
  syncStatus: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default FinancialSettingsCreateWithoutUserInputSchema;
