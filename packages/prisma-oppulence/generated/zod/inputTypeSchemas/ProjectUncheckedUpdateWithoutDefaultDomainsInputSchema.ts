import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { AdminRoleSchema } from './AdminRoleSchema';
import { NullableEnumAdminRoleFieldUpdateOperationsInputSchema } from './NullableEnumAdminRoleFieldUpdateOperationsInputSchema';
import { OrganizationSizeSchema } from './OrganizationSizeSchema';
import { NullableEnumOrganizationSizeFieldUpdateOperationsInputSchema } from './NullableEnumOrganizationSizeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ProjectUsersUncheckedUpdateManyWithoutProjectNestedInputSchema } from './ProjectUsersUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { ProjectInviteUncheckedUpdateManyWithoutProjectNestedInputSchema } from './ProjectInviteUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { SentEmailUncheckedUpdateManyWithoutProjectNestedInputSchema } from './SentEmailUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { LinkUncheckedUpdateManyWithoutProjectNestedInputSchema } from './LinkUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { DomainUncheckedUpdateManyWithoutProjectNestedInputSchema } from './DomainUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { TagUncheckedUpdateManyWithoutProjectNestedInputSchema } from './TagUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { ProgramUncheckedUpdateManyWithoutWorkspaceNestedInputSchema } from './ProgramUncheckedUpdateManyWithoutWorkspaceNestedInputSchema';
import { InvoiceUncheckedUpdateManyWithoutWorkspaceNestedInputSchema } from './InvoiceUncheckedUpdateManyWithoutWorkspaceNestedInputSchema';
import { CustomerUncheckedUpdateManyWithoutProjectNestedInputSchema } from './CustomerUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { RestrictedTokenUncheckedUpdateManyWithoutProjectNestedInputSchema } from './RestrictedTokenUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { OAuthCodeUncheckedUpdateManyWithoutProjectNestedInputSchema } from './OAuthCodeUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { IntegrationUncheckedUpdateManyWithoutProjectNestedInputSchema } from './IntegrationUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { InstalledIntegrationUncheckedUpdateManyWithoutProjectNestedInputSchema } from './InstalledIntegrationUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { WebhookUncheckedUpdateManyWithoutProjectNestedInputSchema } from './WebhookUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { RegisteredDomainUncheckedUpdateManyWithoutProjectNestedInputSchema } from './RegisteredDomainUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { DashboardUncheckedUpdateManyWithoutProjectNestedInputSchema } from './DashboardUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { UtmTemplateUncheckedUpdateManyWithoutProjectNestedInputSchema } from './UtmTemplateUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { YearInReviewUncheckedUpdateManyWithoutWorkspaceNestedInputSchema } from './YearInReviewUncheckedUpdateManyWithoutWorkspaceNestedInputSchema';
import { AppUncheckedUpdateManyWithoutProjectNestedInputSchema } from './AppUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { InboxUncheckedUpdateManyWithoutProjectNestedInputSchema } from './InboxUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { DocumentUncheckedUpdateManyWithoutProjectNestedInputSchema } from './DocumentUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { CustomerTagUncheckedUpdateManyWithoutProjectNestedInputSchema } from './CustomerTagUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { ContractTemplateUncheckedUpdateManyWithoutProjectNestedInputSchema } from './ContractTemplateUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { ReportUncheckedUpdateManyWithoutProjectNestedInputSchema } from './ReportUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { InvoiceTemplateUncheckedUpdateManyWithoutProjectNestedInputSchema } from './InvoiceTemplateUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { LeadUncheckedUpdateManyWithoutProjectNestedInputSchema } from './LeadUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { LeadCategoryUncheckedUpdateManyWithoutProjectNestedInputSchema } from './LeadCategoryUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { PipelineUncheckedUpdateManyWithoutProjectNestedInputSchema } from './PipelineUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { DealUncheckedUpdateManyWithoutProjectNestedInputSchema } from './DealUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { TransactionCategoryUncheckedUpdateManyWithoutProjectNestedInputSchema } from './TransactionCategoryUncheckedUpdateManyWithoutProjectNestedInputSchema';

export const ProjectUncheckedUpdateWithoutDefaultDomainsInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutDefaultDomainsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  inviteCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  plan: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stripeId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  billingCycleStart: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  paymentFailedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stripeConnectId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  payoutMethodId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shopifyStoreId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invoicePrefix: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  adminRole: z.union([ z.lazy(() => AdminRoleSchema),z.lazy(() => NullableEnumAdminRoleFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  organizationSize: z.union([ z.lazy(() => OrganizationSizeSchema),z.lazy(() => NullableEnumOrganizationSizeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  usageLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  linksUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  linksLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salesUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salesLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  domainsLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tagsLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  usersLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aiUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  aiLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  transactionCategoriesLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bankConnectionsUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bankConnectionsLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bankAccountsUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bankAccountsLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  documentsUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  documentsLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  documentStorageUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  documentStorageLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  contractTemplatesUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  contractTemplatesLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  activeContractsUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  activeContractsLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  invoiceTemplatesUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  invoiceTemplatesLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  monthlyInvoicesUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  monthlyInvoicesLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customersUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customersLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customerTagsUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customerTagsLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  reportsUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  reportsLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  reportStorageUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  reportStorageLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  apiRequestsUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  apiRequestsLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  webhooksUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  webhooksLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  integrationsUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  integrationsLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  apiTokensUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  apiTokensLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  teamMembersUsage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  teamMembersLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  auditLogRetention: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  referralLinkId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  referredSignups: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  webhookEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  conversionEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  partnersEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  ssoEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  dotLinkClaimed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  usageLastChecked: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => ProjectUsersUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  invites: z.lazy(() => ProjectInviteUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  sentEmails: z.lazy(() => SentEmailUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  links: z.lazy(() => LinkUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  domains: z.lazy(() => DomainUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  programs: z.lazy(() => ProgramUncheckedUpdateManyWithoutWorkspaceNestedInputSchema).optional(),
  invoices: z.lazy(() => InvoiceUncheckedUpdateManyWithoutWorkspaceNestedInputSchema).optional(),
  customers: z.lazy(() => CustomerUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  restrictedTokens: z.lazy(() => RestrictedTokenUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  oAuthCodes: z.lazy(() => OAuthCodeUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  integrations: z.lazy(() => IntegrationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  installedIntegrations: z.lazy(() => InstalledIntegrationUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  webhooks: z.lazy(() => WebhookUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  registeredDomains: z.lazy(() => RegisteredDomainUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  dashboards: z.lazy(() => DashboardUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  utmTemplates: z.lazy(() => UtmTemplateUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  yearInReviews: z.lazy(() => YearInReviewUncheckedUpdateManyWithoutWorkspaceNestedInputSchema).optional(),
  apps: z.lazy(() => AppUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  Inbox: z.lazy(() => InboxUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  Document: z.lazy(() => DocumentUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  CustomerTag: z.lazy(() => CustomerTagUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  ContractTemplate: z.lazy(() => ContractTemplateUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  Report: z.lazy(() => ReportUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  InvoiceTemplate: z.lazy(() => InvoiceTemplateUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  Lead: z.lazy(() => LeadUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  LeadCategory: z.lazy(() => LeadCategoryUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  Pipeline: z.lazy(() => PipelineUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  Deal: z.lazy(() => DealUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  TransactionCategory: z.lazy(() => TransactionCategoryUncheckedUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();

export default ProjectUncheckedUpdateWithoutDefaultDomainsInputSchema;
