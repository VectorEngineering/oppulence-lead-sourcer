import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectUsersOrderByRelationAggregateInputSchema } from './ProjectUsersOrderByRelationAggregateInputSchema';
import { ProjectInviteOrderByRelationAggregateInputSchema } from './ProjectInviteOrderByRelationAggregateInputSchema';
import { SentEmailOrderByRelationAggregateInputSchema } from './SentEmailOrderByRelationAggregateInputSchema';
import { LinkOrderByRelationAggregateInputSchema } from './LinkOrderByRelationAggregateInputSchema';
import { DomainOrderByRelationAggregateInputSchema } from './DomainOrderByRelationAggregateInputSchema';
import { TagOrderByRelationAggregateInputSchema } from './TagOrderByRelationAggregateInputSchema';
import { ProgramOrderByRelationAggregateInputSchema } from './ProgramOrderByRelationAggregateInputSchema';
import { InvoiceOrderByRelationAggregateInputSchema } from './InvoiceOrderByRelationAggregateInputSchema';
import { CustomerOrderByRelationAggregateInputSchema } from './CustomerOrderByRelationAggregateInputSchema';
import { DefaultDomainsOrderByRelationAggregateInputSchema } from './DefaultDomainsOrderByRelationAggregateInputSchema';
import { RestrictedTokenOrderByRelationAggregateInputSchema } from './RestrictedTokenOrderByRelationAggregateInputSchema';
import { OAuthCodeOrderByRelationAggregateInputSchema } from './OAuthCodeOrderByRelationAggregateInputSchema';
import { IntegrationOrderByRelationAggregateInputSchema } from './IntegrationOrderByRelationAggregateInputSchema';
import { InstalledIntegrationOrderByRelationAggregateInputSchema } from './InstalledIntegrationOrderByRelationAggregateInputSchema';
import { WebhookOrderByRelationAggregateInputSchema } from './WebhookOrderByRelationAggregateInputSchema';
import { RegisteredDomainOrderByRelationAggregateInputSchema } from './RegisteredDomainOrderByRelationAggregateInputSchema';
import { DashboardOrderByRelationAggregateInputSchema } from './DashboardOrderByRelationAggregateInputSchema';
import { UtmTemplateOrderByRelationAggregateInputSchema } from './UtmTemplateOrderByRelationAggregateInputSchema';
import { YearInReviewOrderByRelationAggregateInputSchema } from './YearInReviewOrderByRelationAggregateInputSchema';
import { AppOrderByRelationAggregateInputSchema } from './AppOrderByRelationAggregateInputSchema';
import { InboxOrderByRelationAggregateInputSchema } from './InboxOrderByRelationAggregateInputSchema';
import { DocumentOrderByRelationAggregateInputSchema } from './DocumentOrderByRelationAggregateInputSchema';
import { CustomerTagOrderByRelationAggregateInputSchema } from './CustomerTagOrderByRelationAggregateInputSchema';
import { ContractTemplateOrderByRelationAggregateInputSchema } from './ContractTemplateOrderByRelationAggregateInputSchema';
import { ReportOrderByRelationAggregateInputSchema } from './ReportOrderByRelationAggregateInputSchema';
import { InvoiceTemplateOrderByRelationAggregateInputSchema } from './InvoiceTemplateOrderByRelationAggregateInputSchema';
import { LeadOrderByRelationAggregateInputSchema } from './LeadOrderByRelationAggregateInputSchema';
import { LeadCategoryOrderByRelationAggregateInputSchema } from './LeadCategoryOrderByRelationAggregateInputSchema';
import { PipelineOrderByRelationAggregateInputSchema } from './PipelineOrderByRelationAggregateInputSchema';
import { DealOrderByRelationAggregateInputSchema } from './DealOrderByRelationAggregateInputSchema';
import { TransactionCategoryOrderByRelationAggregateInputSchema } from './TransactionCategoryOrderByRelationAggregateInputSchema';
import { ProjectOrderByRelevanceInputSchema } from './ProjectOrderByRelevanceInputSchema';

export const ProjectOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  logo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  inviteCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  plan: z.lazy(() => SortOrderSchema).optional(),
  stripeId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  billingCycleStart: z.lazy(() => SortOrderSchema).optional(),
  paymentFailedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  stripeConnectId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  payoutMethodId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  shopifyStoreId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  invoicePrefix: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  adminRole: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  organizationSize: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reason: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  usage: z.lazy(() => SortOrderSchema).optional(),
  usageLimit: z.lazy(() => SortOrderSchema).optional(),
  linksUsage: z.lazy(() => SortOrderSchema).optional(),
  linksLimit: z.lazy(() => SortOrderSchema).optional(),
  salesUsage: z.lazy(() => SortOrderSchema).optional(),
  salesLimit: z.lazy(() => SortOrderSchema).optional(),
  domainsLimit: z.lazy(() => SortOrderSchema).optional(),
  tagsLimit: z.lazy(() => SortOrderSchema).optional(),
  usersLimit: z.lazy(() => SortOrderSchema).optional(),
  aiUsage: z.lazy(() => SortOrderSchema).optional(),
  aiLimit: z.lazy(() => SortOrderSchema).optional(),
  transactionCategoriesLimit: z.lazy(() => SortOrderSchema).optional(),
  bankConnectionsUsage: z.lazy(() => SortOrderSchema).optional(),
  bankConnectionsLimit: z.lazy(() => SortOrderSchema).optional(),
  bankAccountsUsage: z.lazy(() => SortOrderSchema).optional(),
  bankAccountsLimit: z.lazy(() => SortOrderSchema).optional(),
  documentsUsage: z.lazy(() => SortOrderSchema).optional(),
  documentsLimit: z.lazy(() => SortOrderSchema).optional(),
  documentStorageUsage: z.lazy(() => SortOrderSchema).optional(),
  documentStorageLimit: z.lazy(() => SortOrderSchema).optional(),
  contractTemplatesUsage: z.lazy(() => SortOrderSchema).optional(),
  contractTemplatesLimit: z.lazy(() => SortOrderSchema).optional(),
  activeContractsUsage: z.lazy(() => SortOrderSchema).optional(),
  activeContractsLimit: z.lazy(() => SortOrderSchema).optional(),
  invoiceTemplatesUsage: z.lazy(() => SortOrderSchema).optional(),
  invoiceTemplatesLimit: z.lazy(() => SortOrderSchema).optional(),
  monthlyInvoicesUsage: z.lazy(() => SortOrderSchema).optional(),
  monthlyInvoicesLimit: z.lazy(() => SortOrderSchema).optional(),
  customersUsage: z.lazy(() => SortOrderSchema).optional(),
  customersLimit: z.lazy(() => SortOrderSchema).optional(),
  customerTagsUsage: z.lazy(() => SortOrderSchema).optional(),
  customerTagsLimit: z.lazy(() => SortOrderSchema).optional(),
  reportsUsage: z.lazy(() => SortOrderSchema).optional(),
  reportsLimit: z.lazy(() => SortOrderSchema).optional(),
  reportStorageUsage: z.lazy(() => SortOrderSchema).optional(),
  reportStorageLimit: z.lazy(() => SortOrderSchema).optional(),
  apiRequestsUsage: z.lazy(() => SortOrderSchema).optional(),
  apiRequestsLimit: z.lazy(() => SortOrderSchema).optional(),
  webhooksUsage: z.lazy(() => SortOrderSchema).optional(),
  webhooksLimit: z.lazy(() => SortOrderSchema).optional(),
  integrationsUsage: z.lazy(() => SortOrderSchema).optional(),
  integrationsLimit: z.lazy(() => SortOrderSchema).optional(),
  apiTokensUsage: z.lazy(() => SortOrderSchema).optional(),
  apiTokensLimit: z.lazy(() => SortOrderSchema).optional(),
  teamMembersUsage: z.lazy(() => SortOrderSchema).optional(),
  teamMembersLimit: z.lazy(() => SortOrderSchema).optional(),
  auditLogRetention: z.lazy(() => SortOrderSchema).optional(),
  referralLinkId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  referredSignups: z.lazy(() => SortOrderSchema).optional(),
  webhookEnabled: z.lazy(() => SortOrderSchema).optional(),
  conversionEnabled: z.lazy(() => SortOrderSchema).optional(),
  partnersEnabled: z.lazy(() => SortOrderSchema).optional(),
  ssoEnabled: z.lazy(() => SortOrderSchema).optional(),
  dotLinkClaimed: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  usageLastChecked: z.lazy(() => SortOrderSchema).optional(),
  users: z.lazy(() => ProjectUsersOrderByRelationAggregateInputSchema).optional(),
  invites: z.lazy(() => ProjectInviteOrderByRelationAggregateInputSchema).optional(),
  sentEmails: z.lazy(() => SentEmailOrderByRelationAggregateInputSchema).optional(),
  links: z.lazy(() => LinkOrderByRelationAggregateInputSchema).optional(),
  domains: z.lazy(() => DomainOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  programs: z.lazy(() => ProgramOrderByRelationAggregateInputSchema).optional(),
  invoices: z.lazy(() => InvoiceOrderByRelationAggregateInputSchema).optional(),
  customers: z.lazy(() => CustomerOrderByRelationAggregateInputSchema).optional(),
  defaultDomains: z.lazy(() => DefaultDomainsOrderByRelationAggregateInputSchema).optional(),
  restrictedTokens: z.lazy(() => RestrictedTokenOrderByRelationAggregateInputSchema).optional(),
  oAuthCodes: z.lazy(() => OAuthCodeOrderByRelationAggregateInputSchema).optional(),
  integrations: z.lazy(() => IntegrationOrderByRelationAggregateInputSchema).optional(),
  installedIntegrations: z.lazy(() => InstalledIntegrationOrderByRelationAggregateInputSchema).optional(),
  webhooks: z.lazy(() => WebhookOrderByRelationAggregateInputSchema).optional(),
  registeredDomains: z.lazy(() => RegisteredDomainOrderByRelationAggregateInputSchema).optional(),
  dashboards: z.lazy(() => DashboardOrderByRelationAggregateInputSchema).optional(),
  utmTemplates: z.lazy(() => UtmTemplateOrderByRelationAggregateInputSchema).optional(),
  yearInReviews: z.lazy(() => YearInReviewOrderByRelationAggregateInputSchema).optional(),
  apps: z.lazy(() => AppOrderByRelationAggregateInputSchema).optional(),
  Inbox: z.lazy(() => InboxOrderByRelationAggregateInputSchema).optional(),
  Document: z.lazy(() => DocumentOrderByRelationAggregateInputSchema).optional(),
  CustomerTag: z.lazy(() => CustomerTagOrderByRelationAggregateInputSchema).optional(),
  ContractTemplate: z.lazy(() => ContractTemplateOrderByRelationAggregateInputSchema).optional(),
  Report: z.lazy(() => ReportOrderByRelationAggregateInputSchema).optional(),
  InvoiceTemplate: z.lazy(() => InvoiceTemplateOrderByRelationAggregateInputSchema).optional(),
  Lead: z.lazy(() => LeadOrderByRelationAggregateInputSchema).optional(),
  LeadCategory: z.lazy(() => LeadCategoryOrderByRelationAggregateInputSchema).optional(),
  Pipeline: z.lazy(() => PipelineOrderByRelationAggregateInputSchema).optional(),
  Deal: z.lazy(() => DealOrderByRelationAggregateInputSchema).optional(),
  TransactionCategory: z.lazy(() => TransactionCategoryOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => ProjectOrderByRelevanceInputSchema).optional()
}).strict();

export default ProjectOrderByWithRelationInputSchema;
