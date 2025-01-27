import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { AccountListRelationFilterSchema } from './AccountListRelationFilterSchema';
import { SessionListRelationFilterSchema } from './SessionListRelationFilterSchema';
import { ProjectUsersListRelationFilterSchema } from './ProjectUsersListRelationFilterSchema';
import { PartnerUserListRelationFilterSchema } from './PartnerUserListRelationFilterSchema';
import { LinkListRelationFilterSchema } from './LinkListRelationFilterSchema';
import { DashboardListRelationFilterSchema } from './DashboardListRelationFilterSchema';
import { TokenListRelationFilterSchema } from './TokenListRelationFilterSchema';
import { RestrictedTokenListRelationFilterSchema } from './RestrictedTokenListRelationFilterSchema';
import { OAuthCodeListRelationFilterSchema } from './OAuthCodeListRelationFilterSchema';
import { IntegrationListRelationFilterSchema } from './IntegrationListRelationFilterSchema';
import { InstalledIntegrationListRelationFilterSchema } from './InstalledIntegrationListRelationFilterSchema';
import { UtmTemplateListRelationFilterSchema } from './UtmTemplateListRelationFilterSchema';
import { AppListRelationFilterSchema } from './AppListRelationFilterSchema';
import { BankAccountListRelationFilterSchema } from './BankAccountListRelationFilterSchema';
import { TransactionListRelationFilterSchema } from './TransactionListRelationFilterSchema';
import { DocumentListRelationFilterSchema } from './DocumentListRelationFilterSchema';
import { ReportAccessListRelationFilterSchema } from './ReportAccessListRelationFilterSchema';
import { ReportListRelationFilterSchema } from './ReportListRelationFilterSchema';
import { AIAssistantSettingsNullableRelationFilterSchema } from './AIAssistantSettingsNullableRelationFilterSchema';
import { AIAssistantSettingsWhereInputSchema } from './AIAssistantSettingsWhereInputSchema';
import { FinancialSettingsNullableRelationFilterSchema } from './FinancialSettingsNullableRelationFilterSchema';
import { FinancialSettingsWhereInputSchema } from './FinancialSettingsWhereInputSchema';
import { BankConnectionSettingsListRelationFilterSchema } from './BankConnectionSettingsListRelationFilterSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isMachine: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  passwordHash: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  invalidLoginAttempts: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  lockedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  subscribed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  source: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  defaultWorkspace: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  defaultPartnerId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  referralLinkId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fullName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dateFormat: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  locale: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timeFormat: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  timezone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  weekStartsOnMonday: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  projects: z.lazy(() => ProjectUsersListRelationFilterSchema).optional(),
  partners: z.lazy(() => PartnerUserListRelationFilterSchema).optional(),
  links: z.lazy(() => LinkListRelationFilterSchema).optional(),
  dashboards: z.lazy(() => DashboardListRelationFilterSchema).optional(),
  tokens: z.lazy(() => TokenListRelationFilterSchema).optional(),
  restrictedTokens: z.lazy(() => RestrictedTokenListRelationFilterSchema).optional(),
  oAuthCodes: z.lazy(() => OAuthCodeListRelationFilterSchema).optional(),
  integrations: z.lazy(() => IntegrationListRelationFilterSchema).optional(),
  installedIntegrations: z.lazy(() => InstalledIntegrationListRelationFilterSchema).optional(),
  utmTemplates: z.lazy(() => UtmTemplateListRelationFilterSchema).optional(),
  apps: z.lazy(() => AppListRelationFilterSchema).optional(),
  bankAccounts: z.lazy(() => BankAccountListRelationFilterSchema).optional(),
  Transaction: z.lazy(() => TransactionListRelationFilterSchema).optional(),
  Document: z.lazy(() => DocumentListRelationFilterSchema).optional(),
  reportAccess: z.lazy(() => ReportAccessListRelationFilterSchema).optional(),
  reports: z.lazy(() => ReportListRelationFilterSchema).optional(),
  aiAssistantSettings: z.union([ z.lazy(() => AIAssistantSettingsNullableRelationFilterSchema),z.lazy(() => AIAssistantSettingsWhereInputSchema) ]).optional().nullable(),
  financialSettings: z.union([ z.lazy(() => FinancialSettingsNullableRelationFilterSchema),z.lazy(() => FinancialSettingsWhereInputSchema) ]).optional().nullable(),
  BankConnectionSettings: z.lazy(() => BankConnectionSettingsListRelationFilterSchema).optional()
}).strict());

export default UserWhereUniqueInputSchema;
