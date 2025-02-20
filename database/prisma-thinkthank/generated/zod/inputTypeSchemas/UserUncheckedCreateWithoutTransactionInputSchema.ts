import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema';
import { ProjectUsersUncheckedCreateNestedManyWithoutUserInputSchema } from './ProjectUsersUncheckedCreateNestedManyWithoutUserInputSchema';
import { PartnerUserUncheckedCreateNestedManyWithoutUserInputSchema } from './PartnerUserUncheckedCreateNestedManyWithoutUserInputSchema';
import { LinkUncheckedCreateNestedManyWithoutUserInputSchema } from './LinkUncheckedCreateNestedManyWithoutUserInputSchema';
import { DashboardUncheckedCreateNestedManyWithoutUserInputSchema } from './DashboardUncheckedCreateNestedManyWithoutUserInputSchema';
import { TokenUncheckedCreateNestedManyWithoutUserInputSchema } from './TokenUncheckedCreateNestedManyWithoutUserInputSchema';
import { RestrictedTokenUncheckedCreateNestedManyWithoutUserInputSchema } from './RestrictedTokenUncheckedCreateNestedManyWithoutUserInputSchema';
import { OAuthCodeUncheckedCreateNestedManyWithoutUserInputSchema } from './OAuthCodeUncheckedCreateNestedManyWithoutUserInputSchema';
import { IntegrationUncheckedCreateNestedManyWithoutUserInputSchema } from './IntegrationUncheckedCreateNestedManyWithoutUserInputSchema';
import { InstalledIntegrationUncheckedCreateNestedManyWithoutUserInputSchema } from './InstalledIntegrationUncheckedCreateNestedManyWithoutUserInputSchema';
import { UtmTemplateUncheckedCreateNestedManyWithoutUserInputSchema } from './UtmTemplateUncheckedCreateNestedManyWithoutUserInputSchema';
import { AppUncheckedCreateNestedManyWithoutUserInputSchema } from './AppUncheckedCreateNestedManyWithoutUserInputSchema';
import { BankAccountUncheckedCreateNestedManyWithoutCreatorInputSchema } from './BankAccountUncheckedCreateNestedManyWithoutCreatorInputSchema';
import { DocumentUncheckedCreateNestedManyWithoutOwnerInputSchema } from './DocumentUncheckedCreateNestedManyWithoutOwnerInputSchema';
import { ReportAccessUncheckedCreateNestedManyWithoutUserInputSchema } from './ReportAccessUncheckedCreateNestedManyWithoutUserInputSchema';
import { ReportUncheckedCreateNestedManyWithoutCreatorInputSchema } from './ReportUncheckedCreateNestedManyWithoutCreatorInputSchema';
import { AIAssistantSettingsUncheckedCreateNestedOneWithoutUserInputSchema } from './AIAssistantSettingsUncheckedCreateNestedOneWithoutUserInputSchema';
import { FinancialSettingsUncheckedCreateNestedOneWithoutUserInputSchema } from './FinancialSettingsUncheckedCreateNestedOneWithoutUserInputSchema';
import { BankConnectionSettingsUncheckedCreateNestedManyWithoutCreatorInputSchema } from './BankConnectionSettingsUncheckedCreateNestedManyWithoutCreatorInputSchema';

export const UserUncheckedCreateWithoutTransactionInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTransactionInput> = z.object({
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
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  projects: z.lazy(() => ProjectUsersUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  partners: z.lazy(() => PartnerUserUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  links: z.lazy(() => LinkUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  dashboards: z.lazy(() => DashboardUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  tokens: z.lazy(() => TokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  restrictedTokens: z.lazy(() => RestrictedTokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  oAuthCodes: z.lazy(() => OAuthCodeUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  integrations: z.lazy(() => IntegrationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  installedIntegrations: z.lazy(() => InstalledIntegrationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  utmTemplates: z.lazy(() => UtmTemplateUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  apps: z.lazy(() => AppUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  bankAccounts: z.lazy(() => BankAccountUncheckedCreateNestedManyWithoutCreatorInputSchema).optional(),
  Document: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  reportAccess: z.lazy(() => ReportAccessUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCreatorInputSchema).optional(),
  aiAssistantSettings: z.lazy(() => AIAssistantSettingsUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  financialSettings: z.lazy(() => FinancialSettingsUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  BankConnectionSettings: z.lazy(() => BankConnectionSettingsUncheckedCreateNestedManyWithoutCreatorInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutTransactionInputSchema;
