import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { ProjectUsersCreateNestedManyWithoutUserInputSchema } from './ProjectUsersCreateNestedManyWithoutUserInputSchema';
import { PartnerUserCreateNestedManyWithoutUserInputSchema } from './PartnerUserCreateNestedManyWithoutUserInputSchema';
import { LinkCreateNestedManyWithoutUserInputSchema } from './LinkCreateNestedManyWithoutUserInputSchema';
import { DashboardCreateNestedManyWithoutUserInputSchema } from './DashboardCreateNestedManyWithoutUserInputSchema';
import { RestrictedTokenCreateNestedManyWithoutUserInputSchema } from './RestrictedTokenCreateNestedManyWithoutUserInputSchema';
import { OAuthCodeCreateNestedManyWithoutUserInputSchema } from './OAuthCodeCreateNestedManyWithoutUserInputSchema';
import { IntegrationCreateNestedManyWithoutUserInputSchema } from './IntegrationCreateNestedManyWithoutUserInputSchema';
import { InstalledIntegrationCreateNestedManyWithoutUserInputSchema } from './InstalledIntegrationCreateNestedManyWithoutUserInputSchema';
import { UtmTemplateCreateNestedManyWithoutUserInputSchema } from './UtmTemplateCreateNestedManyWithoutUserInputSchema';
import { AppCreateNestedManyWithoutUserInputSchema } from './AppCreateNestedManyWithoutUserInputSchema';
import { BankAccountCreateNestedManyWithoutCreatorInputSchema } from './BankAccountCreateNestedManyWithoutCreatorInputSchema';
import { TransactionCreateNestedManyWithoutAssignedToInputSchema } from './TransactionCreateNestedManyWithoutAssignedToInputSchema';
import { DocumentCreateNestedManyWithoutOwnerInputSchema } from './DocumentCreateNestedManyWithoutOwnerInputSchema';
import { ReportAccessCreateNestedManyWithoutUserInputSchema } from './ReportAccessCreateNestedManyWithoutUserInputSchema';
import { ReportCreateNestedManyWithoutCreatorInputSchema } from './ReportCreateNestedManyWithoutCreatorInputSchema';
import { AIAssistantSettingsCreateNestedOneWithoutUserInputSchema } from './AIAssistantSettingsCreateNestedOneWithoutUserInputSchema';
import { FinancialSettingsCreateNestedOneWithoutUserInputSchema } from './FinancialSettingsCreateNestedOneWithoutUserInputSchema';
import { BankConnectionSettingsCreateNestedManyWithoutCreatorInputSchema } from './BankConnectionSettingsCreateNestedManyWithoutCreatorInputSchema';

export const UserCreateWithoutTokensInputSchema: z.ZodType<Prisma.UserCreateWithoutTokensInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  isMachine: z.boolean().optional(),
  passwordHash: z.string().optional().nullable(),
  invalidLoginAttempts: z.number().int().optional(),
  lockedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  subscribed: z.boolean().optional(),
  source: z.string().optional().nullable(),
  defaultWorkspace: z.string().optional().nullable(),
  defaultPartnerId: z.string().optional().nullable(),
  referralLinkId: z.string().optional().nullable(),
  fullName: z.string().optional().nullable(),
  dateFormat: z.string().optional().nullable(),
  locale: z.string().optional().nullable(),
  timeFormat: z.number().int().optional().nullable(),
  timezone: z.string().optional().nullable(),
  weekStartsOnMonday: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  projects: z.lazy(() => ProjectUsersCreateNestedManyWithoutUserInputSchema).optional(),
  partners: z.lazy(() => PartnerUserCreateNestedManyWithoutUserInputSchema).optional(),
  links: z.lazy(() => LinkCreateNestedManyWithoutUserInputSchema).optional(),
  dashboards: z.lazy(() => DashboardCreateNestedManyWithoutUserInputSchema).optional(),
  restrictedTokens: z.lazy(() => RestrictedTokenCreateNestedManyWithoutUserInputSchema).optional(),
  oAuthCodes: z.lazy(() => OAuthCodeCreateNestedManyWithoutUserInputSchema).optional(),
  integrations: z.lazy(() => IntegrationCreateNestedManyWithoutUserInputSchema).optional(),
  installedIntegrations: z.lazy(() => InstalledIntegrationCreateNestedManyWithoutUserInputSchema).optional(),
  utmTemplates: z.lazy(() => UtmTemplateCreateNestedManyWithoutUserInputSchema).optional(),
  apps: z.lazy(() => AppCreateNestedManyWithoutUserInputSchema).optional(),
  bankAccounts: z.lazy(() => BankAccountCreateNestedManyWithoutCreatorInputSchema).optional(),
  Transaction: z.lazy(() => TransactionCreateNestedManyWithoutAssignedToInputSchema).optional(),
  Document: z.lazy(() => DocumentCreateNestedManyWithoutOwnerInputSchema).optional(),
  reportAccess: z.lazy(() => ReportAccessCreateNestedManyWithoutUserInputSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutCreatorInputSchema).optional(),
  aiAssistantSettings: z.lazy(() => AIAssistantSettingsCreateNestedOneWithoutUserInputSchema).optional(),
  financialSettings: z.lazy(() => FinancialSettingsCreateNestedOneWithoutUserInputSchema).optional(),
  BankConnectionSettings: z.lazy(() => BankConnectionSettingsCreateNestedManyWithoutCreatorInputSchema).optional()
}).strict();

export default UserCreateWithoutTokensInputSchema;
