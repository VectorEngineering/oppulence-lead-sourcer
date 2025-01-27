import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
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
import { DocumentListRelationFilterSchema } from './DocumentListRelationFilterSchema';
import { ReportAccessListRelationFilterSchema } from './ReportAccessListRelationFilterSchema';
import { ReportListRelationFilterSchema } from './ReportListRelationFilterSchema';
import { AIAssistantSettingsNullableRelationFilterSchema } from './AIAssistantSettingsNullableRelationFilterSchema';
import { AIAssistantSettingsWhereInputSchema } from './AIAssistantSettingsWhereInputSchema';
import { FinancialSettingsNullableRelationFilterSchema } from './FinancialSettingsNullableRelationFilterSchema';
import { FinancialSettingsWhereInputSchema } from './FinancialSettingsWhereInputSchema';
import { LeadListRelationFilterSchema } from './LeadListRelationFilterSchema';
import { LeadTaskListRelationFilterSchema } from './LeadTaskListRelationFilterSchema';
import { DealListRelationFilterSchema } from './DealListRelationFilterSchema';
import { DealTaskListRelationFilterSchema } from './DealTaskListRelationFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isMachine: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  passwordHash: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  invalidLoginAttempts: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
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
  timeFormat: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
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
  Document: z.lazy(() => DocumentListRelationFilterSchema).optional(),
  reportAccess: z.lazy(() => ReportAccessListRelationFilterSchema).optional(),
  reports: z.lazy(() => ReportListRelationFilterSchema).optional(),
  aiAssistantSettings: z.union([ z.lazy(() => AIAssistantSettingsNullableRelationFilterSchema),z.lazy(() => AIAssistantSettingsWhereInputSchema) ]).optional().nullable(),
  financialSettings: z.union([ z.lazy(() => FinancialSettingsNullableRelationFilterSchema),z.lazy(() => FinancialSettingsWhereInputSchema) ]).optional().nullable(),
  Lead: z.lazy(() => LeadListRelationFilterSchema).optional(),
  LeadTask: z.lazy(() => LeadTaskListRelationFilterSchema).optional(),
  Deal: z.lazy(() => DealListRelationFilterSchema).optional(),
  DealTask: z.lazy(() => DealTaskListRelationFilterSchema).optional()
}).strict();

export default UserWhereInputSchema;
