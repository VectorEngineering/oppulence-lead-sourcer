import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankProviderSchema } from './BankProviderSchema';
import { ConnectionStatusSchema } from './ConnectionStatusSchema';
import { ProjectCreateNestedOneWithoutBankConnectionsInputSchema } from './ProjectCreateNestedOneWithoutBankConnectionsInputSchema';
import { BankAccountCreateNestedManyWithoutBankConnectionInputSchema } from './BankAccountCreateNestedManyWithoutBankConnectionInputSchema';

export const BankConnectionCreateWithoutSettingsInputSchema: z.ZodType<Prisma.BankConnectionCreateWithoutSettingsInput> = z.object({
  id: z.string().cuid().optional(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  tokenExpiresAt: z.coerce.date().optional().nullable(),
  institutionId: z.string(),
  institutionName: z.string(),
  name: z.string(),
  logoUrl: z.string().optional().nullable(),
  primaryColor: z.string().optional().nullable(),
  provider: z.lazy(() => BankProviderSchema).optional().nullable(),
  status: z.lazy(() => ConnectionStatusSchema).optional().nullable(),
  enrollmentId: z.string().optional().nullable(),
  referenceId: z.string().optional().nullable(),
  consentId: z.string().optional().nullable(),
  consentExpiresAt: z.coerce.date().optional().nullable(),
  lastAccessed: z.coerce.date().optional().nullable(),
  lastSuccessfulUpdate: z.coerce.date().optional().nullable(),
  nextUpdateAttempt: z.coerce.date().optional().nullable(),
  updateFrequency: z.string().optional().nullable(),
  errorDetails: z.string().optional().nullable(),
  errorRetries: z.number().int().optional().nullable(),
  errorCount: z.number().int().optional(),
  lastErrorAt: z.coerce.date().optional().nullable(),
  supportsAccountIdentification: z.boolean().optional(),
  supportsTransactionSync: z.boolean().optional(),
  supportsBalanceRefresh: z.boolean().optional(),
  supportedProducts: z.string(),
  expiresAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutBankConnectionsInputSchema),
  bankAccounts: z.lazy(() => BankAccountCreateNestedManyWithoutBankConnectionInputSchema).optional()
}).strict();

export default BankConnectionCreateWithoutSettingsInputSchema;
