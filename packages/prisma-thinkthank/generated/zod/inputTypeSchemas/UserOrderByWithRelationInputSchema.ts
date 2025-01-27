import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AccountOrderByRelationAggregateInputSchema } from './AccountOrderByRelationAggregateInputSchema';
import { SessionOrderByRelationAggregateInputSchema } from './SessionOrderByRelationAggregateInputSchema';
import { ProjectUsersOrderByRelationAggregateInputSchema } from './ProjectUsersOrderByRelationAggregateInputSchema';
import { PartnerUserOrderByRelationAggregateInputSchema } from './PartnerUserOrderByRelationAggregateInputSchema';
import { LinkOrderByRelationAggregateInputSchema } from './LinkOrderByRelationAggregateInputSchema';
import { DashboardOrderByRelationAggregateInputSchema } from './DashboardOrderByRelationAggregateInputSchema';
import { TokenOrderByRelationAggregateInputSchema } from './TokenOrderByRelationAggregateInputSchema';
import { RestrictedTokenOrderByRelationAggregateInputSchema } from './RestrictedTokenOrderByRelationAggregateInputSchema';
import { OAuthCodeOrderByRelationAggregateInputSchema } from './OAuthCodeOrderByRelationAggregateInputSchema';
import { IntegrationOrderByRelationAggregateInputSchema } from './IntegrationOrderByRelationAggregateInputSchema';
import { InstalledIntegrationOrderByRelationAggregateInputSchema } from './InstalledIntegrationOrderByRelationAggregateInputSchema';
import { UtmTemplateOrderByRelationAggregateInputSchema } from './UtmTemplateOrderByRelationAggregateInputSchema';
import { AppOrderByRelationAggregateInputSchema } from './AppOrderByRelationAggregateInputSchema';
import { BankAccountOrderByRelationAggregateInputSchema } from './BankAccountOrderByRelationAggregateInputSchema';
import { TransactionOrderByRelationAggregateInputSchema } from './TransactionOrderByRelationAggregateInputSchema';
import { DocumentOrderByRelationAggregateInputSchema } from './DocumentOrderByRelationAggregateInputSchema';
import { ReportAccessOrderByRelationAggregateInputSchema } from './ReportAccessOrderByRelationAggregateInputSchema';
import { ReportOrderByRelationAggregateInputSchema } from './ReportOrderByRelationAggregateInputSchema';
import { AIAssistantSettingsOrderByWithRelationInputSchema } from './AIAssistantSettingsOrderByWithRelationInputSchema';
import { FinancialSettingsOrderByWithRelationInputSchema } from './FinancialSettingsOrderByWithRelationInputSchema';
import { BankConnectionSettingsOrderByRelationAggregateInputSchema } from './BankConnectionSettingsOrderByRelationAggregateInputSchema';
import { UserOrderByRelevanceInputSchema } from './UserOrderByRelevanceInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isMachine: z.lazy(() => SortOrderSchema).optional(),
  passwordHash: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  invalidLoginAttempts: z.lazy(() => SortOrderSchema).optional(),
  lockedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  subscribed: z.lazy(() => SortOrderSchema).optional(),
  source: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  defaultWorkspace: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  defaultPartnerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  referralLinkId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fullName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dateFormat: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  timeFormat: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  timezone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  weekStartsOnMonday: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
  projects: z.lazy(() => ProjectUsersOrderByRelationAggregateInputSchema).optional(),
  partners: z.lazy(() => PartnerUserOrderByRelationAggregateInputSchema).optional(),
  links: z.lazy(() => LinkOrderByRelationAggregateInputSchema).optional(),
  dashboards: z.lazy(() => DashboardOrderByRelationAggregateInputSchema).optional(),
  tokens: z.lazy(() => TokenOrderByRelationAggregateInputSchema).optional(),
  restrictedTokens: z.lazy(() => RestrictedTokenOrderByRelationAggregateInputSchema).optional(),
  oAuthCodes: z.lazy(() => OAuthCodeOrderByRelationAggregateInputSchema).optional(),
  integrations: z.lazy(() => IntegrationOrderByRelationAggregateInputSchema).optional(),
  installedIntegrations: z.lazy(() => InstalledIntegrationOrderByRelationAggregateInputSchema).optional(),
  utmTemplates: z.lazy(() => UtmTemplateOrderByRelationAggregateInputSchema).optional(),
  apps: z.lazy(() => AppOrderByRelationAggregateInputSchema).optional(),
  bankAccounts: z.lazy(() => BankAccountOrderByRelationAggregateInputSchema).optional(),
  Transaction: z.lazy(() => TransactionOrderByRelationAggregateInputSchema).optional(),
  Document: z.lazy(() => DocumentOrderByRelationAggregateInputSchema).optional(),
  reportAccess: z.lazy(() => ReportAccessOrderByRelationAggregateInputSchema).optional(),
  reports: z.lazy(() => ReportOrderByRelationAggregateInputSchema).optional(),
  aiAssistantSettings: z.lazy(() => AIAssistantSettingsOrderByWithRelationInputSchema).optional(),
  financialSettings: z.lazy(() => FinancialSettingsOrderByWithRelationInputSchema).optional(),
  BankConnectionSettings: z.lazy(() => BankConnectionSettingsOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => UserOrderByRelevanceInputSchema).optional()
}).strict();

export default UserOrderByWithRelationInputSchema;
