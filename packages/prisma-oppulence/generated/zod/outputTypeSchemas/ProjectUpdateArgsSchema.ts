import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectIncludeSchema } from '../inputTypeSchemas/ProjectIncludeSchema'
import { ProjectUpdateInputSchema } from '../inputTypeSchemas/ProjectUpdateInputSchema'
import { ProjectUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectUncheckedUpdateInputSchema'
import { ProjectWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectWhereUniqueInputSchema'
import { ProjectUsersFindManyArgsSchema } from './ProjectUsersFindManyArgsSchema'
import { ProjectInviteFindManyArgsSchema } from './ProjectInviteFindManyArgsSchema'
import { SentEmailFindManyArgsSchema } from './SentEmailFindManyArgsSchema'
import { LinkFindManyArgsSchema } from './LinkFindManyArgsSchema'
import { DomainFindManyArgsSchema } from './DomainFindManyArgsSchema'
import { TagFindManyArgsSchema } from './TagFindManyArgsSchema'
import { ProgramFindManyArgsSchema } from './ProgramFindManyArgsSchema'
import { InvoiceFindManyArgsSchema } from './InvoiceFindManyArgsSchema'
import { CustomerFindManyArgsSchema } from './CustomerFindManyArgsSchema'
import { DefaultDomainsFindManyArgsSchema } from './DefaultDomainsFindManyArgsSchema'
import { RestrictedTokenFindManyArgsSchema } from './RestrictedTokenFindManyArgsSchema'
import { OAuthCodeFindManyArgsSchema } from './OAuthCodeFindManyArgsSchema'
import { IntegrationFindManyArgsSchema } from './IntegrationFindManyArgsSchema'
import { InstalledIntegrationFindManyArgsSchema } from './InstalledIntegrationFindManyArgsSchema'
import { WebhookFindManyArgsSchema } from './WebhookFindManyArgsSchema'
import { RegisteredDomainFindManyArgsSchema } from './RegisteredDomainFindManyArgsSchema'
import { DashboardFindManyArgsSchema } from './DashboardFindManyArgsSchema'
import { UtmTemplateFindManyArgsSchema } from './UtmTemplateFindManyArgsSchema'
import { YearInReviewFindManyArgsSchema } from './YearInReviewFindManyArgsSchema'
import { AppFindManyArgsSchema } from './AppFindManyArgsSchema'
import { InboxFindManyArgsSchema } from './InboxFindManyArgsSchema'
import { DocumentFindManyArgsSchema } from './DocumentFindManyArgsSchema'
import { CustomerTagFindManyArgsSchema } from './CustomerTagFindManyArgsSchema'
import { ContractTemplateFindManyArgsSchema } from './ContractTemplateFindManyArgsSchema'
import { ReportFindManyArgsSchema } from './ReportFindManyArgsSchema'
import { InvoiceTemplateFindManyArgsSchema } from './InvoiceTemplateFindManyArgsSchema'
import { LeadFindManyArgsSchema } from './LeadFindManyArgsSchema'
import { LeadCategoryFindManyArgsSchema } from './LeadCategoryFindManyArgsSchema'
import { PipelineFindManyArgsSchema } from './PipelineFindManyArgsSchema'
import { DealFindManyArgsSchema } from './DealFindManyArgsSchema'
import { TransactionCategoryFindManyArgsSchema } from './TransactionCategoryFindManyArgsSchema'
import { ProjectCountOutputTypeArgsSchema } from './ProjectCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectSelectSchema: z.ZodType<Prisma.ProjectSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        slug: z.boolean().optional(),
        logo: z.boolean().optional(),
        inviteCode: z.boolean().optional(),
        plan: z.boolean().optional(),
        stripeId: z.boolean().optional(),
        billingCycleStart: z.boolean().optional(),
        paymentFailedAt: z.boolean().optional(),
        stripeConnectId: z.boolean().optional(),
        payoutMethodId: z.boolean().optional(),
        shopifyStoreId: z.boolean().optional(),
        invoicePrefix: z.boolean().optional(),
        adminRole: z.boolean().optional(),
        organizationSize: z.boolean().optional(),
        reason: z.boolean().optional(),
        usage: z.boolean().optional(),
        usageLimit: z.boolean().optional(),
        linksUsage: z.boolean().optional(),
        linksLimit: z.boolean().optional(),
        salesUsage: z.boolean().optional(),
        salesLimit: z.boolean().optional(),
        domainsLimit: z.boolean().optional(),
        tagsLimit: z.boolean().optional(),
        usersLimit: z.boolean().optional(),
        aiUsage: z.boolean().optional(),
        aiLimit: z.boolean().optional(),
        transactionCategoriesLimit: z.boolean().optional(),
        bankConnectionsUsage: z.boolean().optional(),
        bankConnectionsLimit: z.boolean().optional(),
        bankAccountsUsage: z.boolean().optional(),
        bankAccountsLimit: z.boolean().optional(),
        documentsUsage: z.boolean().optional(),
        documentsLimit: z.boolean().optional(),
        documentStorageUsage: z.boolean().optional(),
        documentStorageLimit: z.boolean().optional(),
        contractTemplatesUsage: z.boolean().optional(),
        contractTemplatesLimit: z.boolean().optional(),
        activeContractsUsage: z.boolean().optional(),
        activeContractsLimit: z.boolean().optional(),
        invoiceTemplatesUsage: z.boolean().optional(),
        invoiceTemplatesLimit: z.boolean().optional(),
        monthlyInvoicesUsage: z.boolean().optional(),
        monthlyInvoicesLimit: z.boolean().optional(),
        customersUsage: z.boolean().optional(),
        customersLimit: z.boolean().optional(),
        customerTagsUsage: z.boolean().optional(),
        customerTagsLimit: z.boolean().optional(),
        reportsUsage: z.boolean().optional(),
        reportsLimit: z.boolean().optional(),
        reportStorageUsage: z.boolean().optional(),
        reportStorageLimit: z.boolean().optional(),
        apiRequestsUsage: z.boolean().optional(),
        apiRequestsLimit: z.boolean().optional(),
        webhooksUsage: z.boolean().optional(),
        webhooksLimit: z.boolean().optional(),
        integrationsUsage: z.boolean().optional(),
        integrationsLimit: z.boolean().optional(),
        apiTokensUsage: z.boolean().optional(),
        apiTokensLimit: z.boolean().optional(),
        teamMembersUsage: z.boolean().optional(),
        teamMembersLimit: z.boolean().optional(),
        auditLogRetention: z.boolean().optional(),
        referralLinkId: z.boolean().optional(),
        referredSignups: z.boolean().optional(),
        webhookEnabled: z.boolean().optional(),
        conversionEnabled: z.boolean().optional(),
        partnersEnabled: z.boolean().optional(),
        ssoEnabled: z.boolean().optional(),
        dotLinkClaimed: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        usageLastChecked: z.boolean().optional(),
        users: z.union([z.boolean(), z.lazy(() => ProjectUsersFindManyArgsSchema)]).optional(),
        invites: z.union([z.boolean(), z.lazy(() => ProjectInviteFindManyArgsSchema)]).optional(),
        sentEmails: z.union([z.boolean(), z.lazy(() => SentEmailFindManyArgsSchema)]).optional(),
        links: z.union([z.boolean(), z.lazy(() => LinkFindManyArgsSchema)]).optional(),
        domains: z.union([z.boolean(), z.lazy(() => DomainFindManyArgsSchema)]).optional(),
        tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
        programs: z.union([z.boolean(), z.lazy(() => ProgramFindManyArgsSchema)]).optional(),
        invoices: z.union([z.boolean(), z.lazy(() => InvoiceFindManyArgsSchema)]).optional(),
        customers: z.union([z.boolean(), z.lazy(() => CustomerFindManyArgsSchema)]).optional(),
        defaultDomains: z.union([z.boolean(), z.lazy(() => DefaultDomainsFindManyArgsSchema)]).optional(),
        restrictedTokens: z.union([z.boolean(), z.lazy(() => RestrictedTokenFindManyArgsSchema)]).optional(),
        oAuthCodes: z.union([z.boolean(), z.lazy(() => OAuthCodeFindManyArgsSchema)]).optional(),
        integrations: z.union([z.boolean(), z.lazy(() => IntegrationFindManyArgsSchema)]).optional(),
        installedIntegrations: z.union([z.boolean(), z.lazy(() => InstalledIntegrationFindManyArgsSchema)]).optional(),
        webhooks: z.union([z.boolean(), z.lazy(() => WebhookFindManyArgsSchema)]).optional(),
        registeredDomains: z.union([z.boolean(), z.lazy(() => RegisteredDomainFindManyArgsSchema)]).optional(),
        dashboards: z.union([z.boolean(), z.lazy(() => DashboardFindManyArgsSchema)]).optional(),
        utmTemplates: z.union([z.boolean(), z.lazy(() => UtmTemplateFindManyArgsSchema)]).optional(),
        yearInReviews: z.union([z.boolean(), z.lazy(() => YearInReviewFindManyArgsSchema)]).optional(),
        apps: z.union([z.boolean(), z.lazy(() => AppFindManyArgsSchema)]).optional(),
        Inbox: z.union([z.boolean(), z.lazy(() => InboxFindManyArgsSchema)]).optional(),
        Document: z.union([z.boolean(), z.lazy(() => DocumentFindManyArgsSchema)]).optional(),
        CustomerTag: z.union([z.boolean(), z.lazy(() => CustomerTagFindManyArgsSchema)]).optional(),
        ContractTemplate: z.union([z.boolean(), z.lazy(() => ContractTemplateFindManyArgsSchema)]).optional(),
        Report: z.union([z.boolean(), z.lazy(() => ReportFindManyArgsSchema)]).optional(),
        InvoiceTemplate: z.union([z.boolean(), z.lazy(() => InvoiceTemplateFindManyArgsSchema)]).optional(),
        Lead: z.union([z.boolean(), z.lazy(() => LeadFindManyArgsSchema)]).optional(),
        LeadCategory: z.union([z.boolean(), z.lazy(() => LeadCategoryFindManyArgsSchema)]).optional(),
        Pipeline: z.union([z.boolean(), z.lazy(() => PipelineFindManyArgsSchema)]).optional(),
        Deal: z.union([z.boolean(), z.lazy(() => DealFindManyArgsSchema)]).optional(),
        TransactionCategory: z.union([z.boolean(), z.lazy(() => TransactionCategoryFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const ProjectUpdateArgsSchema: z.ZodType<Prisma.ProjectUpdateArgs> = z
    .object({
        select: ProjectSelectSchema.optional(),
        include: ProjectIncludeSchema.optional(),
        data: z.union([ProjectUpdateInputSchema, ProjectUncheckedUpdateInputSchema]),
        where: ProjectWhereUniqueInputSchema
    })
    .strict()

export default ProjectUpdateArgsSchema
