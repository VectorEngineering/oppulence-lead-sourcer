import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUsersFindManyArgsSchema } from "../outputTypeSchemas/ProjectUsersFindManyArgsSchema"
import { ProjectInviteFindManyArgsSchema } from "../outputTypeSchemas/ProjectInviteFindManyArgsSchema"
import { SentEmailFindManyArgsSchema } from "../outputTypeSchemas/SentEmailFindManyArgsSchema"
import { LinkFindManyArgsSchema } from "../outputTypeSchemas/LinkFindManyArgsSchema"
import { DomainFindManyArgsSchema } from "../outputTypeSchemas/DomainFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { ProgramFindManyArgsSchema } from "../outputTypeSchemas/ProgramFindManyArgsSchema"
import { InvoiceFindManyArgsSchema } from "../outputTypeSchemas/InvoiceFindManyArgsSchema"
import { CustomerFindManyArgsSchema } from "../outputTypeSchemas/CustomerFindManyArgsSchema"
import { DefaultDomainsFindManyArgsSchema } from "../outputTypeSchemas/DefaultDomainsFindManyArgsSchema"
import { RestrictedTokenFindManyArgsSchema } from "../outputTypeSchemas/RestrictedTokenFindManyArgsSchema"
import { OAuthCodeFindManyArgsSchema } from "../outputTypeSchemas/OAuthCodeFindManyArgsSchema"
import { IntegrationFindManyArgsSchema } from "../outputTypeSchemas/IntegrationFindManyArgsSchema"
import { InstalledIntegrationFindManyArgsSchema } from "../outputTypeSchemas/InstalledIntegrationFindManyArgsSchema"
import { WebhookFindManyArgsSchema } from "../outputTypeSchemas/WebhookFindManyArgsSchema"
import { RegisteredDomainFindManyArgsSchema } from "../outputTypeSchemas/RegisteredDomainFindManyArgsSchema"
import { DashboardFindManyArgsSchema } from "../outputTypeSchemas/DashboardFindManyArgsSchema"
import { UtmTemplateFindManyArgsSchema } from "../outputTypeSchemas/UtmTemplateFindManyArgsSchema"
import { YearInReviewFindManyArgsSchema } from "../outputTypeSchemas/YearInReviewFindManyArgsSchema"
import { AppFindManyArgsSchema } from "../outputTypeSchemas/AppFindManyArgsSchema"
import { InboxFindManyArgsSchema } from "../outputTypeSchemas/InboxFindManyArgsSchema"
import { DocumentFindManyArgsSchema } from "../outputTypeSchemas/DocumentFindManyArgsSchema"
import { CustomerTagFindManyArgsSchema } from "../outputTypeSchemas/CustomerTagFindManyArgsSchema"
import { ContractTemplateFindManyArgsSchema } from "../outputTypeSchemas/ContractTemplateFindManyArgsSchema"
import { ReportFindManyArgsSchema } from "../outputTypeSchemas/ReportFindManyArgsSchema"
import { InvoiceTemplateFindManyArgsSchema } from "../outputTypeSchemas/InvoiceTemplateFindManyArgsSchema"
import { LeadFindManyArgsSchema } from "../outputTypeSchemas/LeadFindManyArgsSchema"
import { LeadCategoryFindManyArgsSchema } from "../outputTypeSchemas/LeadCategoryFindManyArgsSchema"
import { PipelineFindManyArgsSchema } from "../outputTypeSchemas/PipelineFindManyArgsSchema"
import { DealFindManyArgsSchema } from "../outputTypeSchemas/DealFindManyArgsSchema"
import { TransactionCategoryFindManyArgsSchema } from "../outputTypeSchemas/TransactionCategoryFindManyArgsSchema"
import { ProjectCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProjectCountOutputTypeArgsSchema"

export const ProjectIncludeSchema: z.ZodType<Prisma.ProjectInclude> = z.object({
  users: z.union([z.boolean(),z.lazy(() => ProjectUsersFindManyArgsSchema)]).optional(),
  invites: z.union([z.boolean(),z.lazy(() => ProjectInviteFindManyArgsSchema)]).optional(),
  sentEmails: z.union([z.boolean(),z.lazy(() => SentEmailFindManyArgsSchema)]).optional(),
  links: z.union([z.boolean(),z.lazy(() => LinkFindManyArgsSchema)]).optional(),
  domains: z.union([z.boolean(),z.lazy(() => DomainFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  programs: z.union([z.boolean(),z.lazy(() => ProgramFindManyArgsSchema)]).optional(),
  invoices: z.union([z.boolean(),z.lazy(() => InvoiceFindManyArgsSchema)]).optional(),
  customers: z.union([z.boolean(),z.lazy(() => CustomerFindManyArgsSchema)]).optional(),
  defaultDomains: z.union([z.boolean(),z.lazy(() => DefaultDomainsFindManyArgsSchema)]).optional(),
  restrictedTokens: z.union([z.boolean(),z.lazy(() => RestrictedTokenFindManyArgsSchema)]).optional(),
  oAuthCodes: z.union([z.boolean(),z.lazy(() => OAuthCodeFindManyArgsSchema)]).optional(),
  integrations: z.union([z.boolean(),z.lazy(() => IntegrationFindManyArgsSchema)]).optional(),
  installedIntegrations: z.union([z.boolean(),z.lazy(() => InstalledIntegrationFindManyArgsSchema)]).optional(),
  webhooks: z.union([z.boolean(),z.lazy(() => WebhookFindManyArgsSchema)]).optional(),
  registeredDomains: z.union([z.boolean(),z.lazy(() => RegisteredDomainFindManyArgsSchema)]).optional(),
  dashboards: z.union([z.boolean(),z.lazy(() => DashboardFindManyArgsSchema)]).optional(),
  utmTemplates: z.union([z.boolean(),z.lazy(() => UtmTemplateFindManyArgsSchema)]).optional(),
  yearInReviews: z.union([z.boolean(),z.lazy(() => YearInReviewFindManyArgsSchema)]).optional(),
  apps: z.union([z.boolean(),z.lazy(() => AppFindManyArgsSchema)]).optional(),
  Inbox: z.union([z.boolean(),z.lazy(() => InboxFindManyArgsSchema)]).optional(),
  Document: z.union([z.boolean(),z.lazy(() => DocumentFindManyArgsSchema)]).optional(),
  CustomerTag: z.union([z.boolean(),z.lazy(() => CustomerTagFindManyArgsSchema)]).optional(),
  ContractTemplate: z.union([z.boolean(),z.lazy(() => ContractTemplateFindManyArgsSchema)]).optional(),
  Report: z.union([z.boolean(),z.lazy(() => ReportFindManyArgsSchema)]).optional(),
  InvoiceTemplate: z.union([z.boolean(),z.lazy(() => InvoiceTemplateFindManyArgsSchema)]).optional(),
  Lead: z.union([z.boolean(),z.lazy(() => LeadFindManyArgsSchema)]).optional(),
  LeadCategory: z.union([z.boolean(),z.lazy(() => LeadCategoryFindManyArgsSchema)]).optional(),
  Pipeline: z.union([z.boolean(),z.lazy(() => PipelineFindManyArgsSchema)]).optional(),
  Deal: z.union([z.boolean(),z.lazy(() => DealFindManyArgsSchema)]).optional(),
  TransactionCategory: z.union([z.boolean(),z.lazy(() => TransactionCategoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProjectCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ProjectIncludeSchema;
