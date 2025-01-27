import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumAdminRoleNullableFilterSchema } from './EnumAdminRoleNullableFilterSchema';
import { AdminRoleSchema } from './AdminRoleSchema';
import { EnumOrganizationSizeNullableFilterSchema } from './EnumOrganizationSizeNullableFilterSchema';
import { OrganizationSizeSchema } from './OrganizationSizeSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProjectUsersListRelationFilterSchema } from './ProjectUsersListRelationFilterSchema';
import { ProjectInviteListRelationFilterSchema } from './ProjectInviteListRelationFilterSchema';
import { SentEmailListRelationFilterSchema } from './SentEmailListRelationFilterSchema';
import { LinkListRelationFilterSchema } from './LinkListRelationFilterSchema';
import { DomainListRelationFilterSchema } from './DomainListRelationFilterSchema';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema';
import { ProgramListRelationFilterSchema } from './ProgramListRelationFilterSchema';
import { InvoiceListRelationFilterSchema } from './InvoiceListRelationFilterSchema';
import { CustomerListRelationFilterSchema } from './CustomerListRelationFilterSchema';
import { DefaultDomainsListRelationFilterSchema } from './DefaultDomainsListRelationFilterSchema';
import { RestrictedTokenListRelationFilterSchema } from './RestrictedTokenListRelationFilterSchema';
import { OAuthCodeListRelationFilterSchema } from './OAuthCodeListRelationFilterSchema';
import { IntegrationListRelationFilterSchema } from './IntegrationListRelationFilterSchema';
import { InstalledIntegrationListRelationFilterSchema } from './InstalledIntegrationListRelationFilterSchema';
import { WebhookListRelationFilterSchema } from './WebhookListRelationFilterSchema';
import { RegisteredDomainListRelationFilterSchema } from './RegisteredDomainListRelationFilterSchema';
import { DashboardListRelationFilterSchema } from './DashboardListRelationFilterSchema';
import { UtmTemplateListRelationFilterSchema } from './UtmTemplateListRelationFilterSchema';
import { YearInReviewListRelationFilterSchema } from './YearInReviewListRelationFilterSchema';
import { BankConnectionListRelationFilterSchema } from './BankConnectionListRelationFilterSchema';
import { AppListRelationFilterSchema } from './AppListRelationFilterSchema';
import { InboxListRelationFilterSchema } from './InboxListRelationFilterSchema';
import { BankAccountListRelationFilterSchema } from './BankAccountListRelationFilterSchema';
import { TransactionListRelationFilterSchema } from './TransactionListRelationFilterSchema';
import { TransactionAttachmentListRelationFilterSchema } from './TransactionAttachmentListRelationFilterSchema';
import { TransactionCategoryListRelationFilterSchema } from './TransactionCategoryListRelationFilterSchema';
import { TransactionEnrichmentListRelationFilterSchema } from './TransactionEnrichmentListRelationFilterSchema';
import { DocumentListRelationFilterSchema } from './DocumentListRelationFilterSchema';
import { CustomerTagListRelationFilterSchema } from './CustomerTagListRelationFilterSchema';
import { ContractTemplateListRelationFilterSchema } from './ContractTemplateListRelationFilterSchema';
import { ReportListRelationFilterSchema } from './ReportListRelationFilterSchema';
import { InvoiceTemplateListRelationFilterSchema } from './InvoiceTemplateListRelationFilterSchema';

export const ProjectWhereInputSchema: z.ZodType<Prisma.ProjectWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectWhereInputSchema),z.lazy(() => ProjectWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectWhereInputSchema),z.lazy(() => ProjectWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  logo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  inviteCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  plan: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  stripeId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  billingCycleStart: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  paymentFailedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  stripeConnectId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  payoutMethodId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  shopifyStoreId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  invoicePrefix: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  adminRole: z.union([ z.lazy(() => EnumAdminRoleNullableFilterSchema),z.lazy(() => AdminRoleSchema) ]).optional().nullable(),
  organizationSize: z.union([ z.lazy(() => EnumOrganizationSizeNullableFilterSchema),z.lazy(() => OrganizationSizeSchema) ]).optional().nullable(),
  reason: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  usage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  usageLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  linksUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  linksLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  salesUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  salesLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  domainsLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagsLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  usersLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  aiUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  aiLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  transactionCategoriesLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bankConnectionsUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bankConnectionsLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bankAccountsUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bankAccountsLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  documentsUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  documentsLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  documentStorageUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  documentStorageLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  contractTemplatesUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  contractTemplatesLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  activeContractsUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  activeContractsLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  invoiceTemplatesUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  invoiceTemplatesLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  monthlyInvoicesUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  monthlyInvoicesLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  customersUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  customersLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  customerTagsUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  customerTagsLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  reportsUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  reportsLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  reportStorageUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  reportStorageLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  apiRequestsUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  apiRequestsLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  webhooksUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  webhooksLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  integrationsUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  integrationsLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  apiTokensUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  apiTokensLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  teamMembersUsage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  teamMembersLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  auditLogRetention: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  referralLinkId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  referredSignups: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  webhookEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  conversionEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  partnersEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  ssoEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  dotLinkClaimed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  usageLastChecked: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  users: z.lazy(() => ProjectUsersListRelationFilterSchema).optional(),
  invites: z.lazy(() => ProjectInviteListRelationFilterSchema).optional(),
  sentEmails: z.lazy(() => SentEmailListRelationFilterSchema).optional(),
  links: z.lazy(() => LinkListRelationFilterSchema).optional(),
  domains: z.lazy(() => DomainListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  programs: z.lazy(() => ProgramListRelationFilterSchema).optional(),
  invoices: z.lazy(() => InvoiceListRelationFilterSchema).optional(),
  customers: z.lazy(() => CustomerListRelationFilterSchema).optional(),
  defaultDomains: z.lazy(() => DefaultDomainsListRelationFilterSchema).optional(),
  restrictedTokens: z.lazy(() => RestrictedTokenListRelationFilterSchema).optional(),
  oAuthCodes: z.lazy(() => OAuthCodeListRelationFilterSchema).optional(),
  integrations: z.lazy(() => IntegrationListRelationFilterSchema).optional(),
  installedIntegrations: z.lazy(() => InstalledIntegrationListRelationFilterSchema).optional(),
  webhooks: z.lazy(() => WebhookListRelationFilterSchema).optional(),
  registeredDomains: z.lazy(() => RegisteredDomainListRelationFilterSchema).optional(),
  dashboards: z.lazy(() => DashboardListRelationFilterSchema).optional(),
  utmTemplates: z.lazy(() => UtmTemplateListRelationFilterSchema).optional(),
  yearInReviews: z.lazy(() => YearInReviewListRelationFilterSchema).optional(),
  bankConnections: z.lazy(() => BankConnectionListRelationFilterSchema).optional(),
  apps: z.lazy(() => AppListRelationFilterSchema).optional(),
  Inbox: z.lazy(() => InboxListRelationFilterSchema).optional(),
  BankAccount: z.lazy(() => BankAccountListRelationFilterSchema).optional(),
  Transaction: z.lazy(() => TransactionListRelationFilterSchema).optional(),
  TransactionAttachment: z.lazy(() => TransactionAttachmentListRelationFilterSchema).optional(),
  TransactionCategory: z.lazy(() => TransactionCategoryListRelationFilterSchema).optional(),
  TransactionEnrichment: z.lazy(() => TransactionEnrichmentListRelationFilterSchema).optional(),
  Document: z.lazy(() => DocumentListRelationFilterSchema).optional(),
  CustomerTag: z.lazy(() => CustomerTagListRelationFilterSchema).optional(),
  ContractTemplate: z.lazy(() => ContractTemplateListRelationFilterSchema).optional(),
  Report: z.lazy(() => ReportListRelationFilterSchema).optional(),
  InvoiceTemplate: z.lazy(() => InvoiceTemplateListRelationFilterSchema).optional()
}).strict();

export default ProjectWhereInputSchema;
