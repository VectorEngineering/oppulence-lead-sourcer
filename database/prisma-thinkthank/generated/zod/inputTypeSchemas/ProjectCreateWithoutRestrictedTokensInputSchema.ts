import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AdminRoleSchema } from './AdminRoleSchema'
import { OrganizationSizeSchema } from './OrganizationSizeSchema'
import { ProjectUsersCreateNestedManyWithoutProjectInputSchema } from './ProjectUsersCreateNestedManyWithoutProjectInputSchema'
import { ProjectInviteCreateNestedManyWithoutProjectInputSchema } from './ProjectInviteCreateNestedManyWithoutProjectInputSchema'
import { SentEmailCreateNestedManyWithoutProjectInputSchema } from './SentEmailCreateNestedManyWithoutProjectInputSchema'
import { LinkCreateNestedManyWithoutProjectInputSchema } from './LinkCreateNestedManyWithoutProjectInputSchema'
import { DomainCreateNestedManyWithoutProjectInputSchema } from './DomainCreateNestedManyWithoutProjectInputSchema'
import { TagCreateNestedManyWithoutProjectInputSchema } from './TagCreateNestedManyWithoutProjectInputSchema'
import { ProgramCreateNestedManyWithoutWorkspaceInputSchema } from './ProgramCreateNestedManyWithoutWorkspaceInputSchema'
import { InvoiceCreateNestedManyWithoutWorkspaceInputSchema } from './InvoiceCreateNestedManyWithoutWorkspaceInputSchema'
import { CustomerCreateNestedManyWithoutProjectInputSchema } from './CustomerCreateNestedManyWithoutProjectInputSchema'
import { DefaultDomainsCreateNestedManyWithoutProjectInputSchema } from './DefaultDomainsCreateNestedManyWithoutProjectInputSchema'
import { OAuthCodeCreateNestedManyWithoutProjectInputSchema } from './OAuthCodeCreateNestedManyWithoutProjectInputSchema'
import { IntegrationCreateNestedManyWithoutProjectInputSchema } from './IntegrationCreateNestedManyWithoutProjectInputSchema'
import { InstalledIntegrationCreateNestedManyWithoutProjectInputSchema } from './InstalledIntegrationCreateNestedManyWithoutProjectInputSchema'
import { WebhookCreateNestedManyWithoutProjectInputSchema } from './WebhookCreateNestedManyWithoutProjectInputSchema'
import { RegisteredDomainCreateNestedManyWithoutProjectInputSchema } from './RegisteredDomainCreateNestedManyWithoutProjectInputSchema'
import { DashboardCreateNestedManyWithoutProjectInputSchema } from './DashboardCreateNestedManyWithoutProjectInputSchema'
import { UtmTemplateCreateNestedManyWithoutProjectInputSchema } from './UtmTemplateCreateNestedManyWithoutProjectInputSchema'
import { YearInReviewCreateNestedManyWithoutWorkspaceInputSchema } from './YearInReviewCreateNestedManyWithoutWorkspaceInputSchema'
import { BankConnectionCreateNestedManyWithoutProjectInputSchema } from './BankConnectionCreateNestedManyWithoutProjectInputSchema'
import { AppCreateNestedManyWithoutProjectInputSchema } from './AppCreateNestedManyWithoutProjectInputSchema'
import { InboxCreateNestedManyWithoutProjectInputSchema } from './InboxCreateNestedManyWithoutProjectInputSchema'
import { BankAccountCreateNestedManyWithoutProjectInputSchema } from './BankAccountCreateNestedManyWithoutProjectInputSchema'
import { TransactionCreateNestedManyWithoutProjectInputSchema } from './TransactionCreateNestedManyWithoutProjectInputSchema'
import { TransactionAttachmentCreateNestedManyWithoutProjectInputSchema } from './TransactionAttachmentCreateNestedManyWithoutProjectInputSchema'
import { TransactionCategoryCreateNestedManyWithoutProjectInputSchema } from './TransactionCategoryCreateNestedManyWithoutProjectInputSchema'
import { TransactionEnrichmentCreateNestedManyWithoutProjectInputSchema } from './TransactionEnrichmentCreateNestedManyWithoutProjectInputSchema'
import { DocumentCreateNestedManyWithoutProjectInputSchema } from './DocumentCreateNestedManyWithoutProjectInputSchema'
import { CustomerTagCreateNestedManyWithoutProjectInputSchema } from './CustomerTagCreateNestedManyWithoutProjectInputSchema'
import { ContractTemplateCreateNestedManyWithoutProjectInputSchema } from './ContractTemplateCreateNestedManyWithoutProjectInputSchema'
import { ReportCreateNestedManyWithoutProjectInputSchema } from './ReportCreateNestedManyWithoutProjectInputSchema'
import { InvoiceTemplateCreateNestedManyWithoutProjectInputSchema } from './InvoiceTemplateCreateNestedManyWithoutProjectInputSchema'

export const ProjectCreateWithoutRestrictedTokensInputSchema: z.ZodType<Prisma.ProjectCreateWithoutRestrictedTokensInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        slug: z.string(),
        logo: z.string().optional().nullable(),
        inviteCode: z.string().optional().nullable(),
        plan: z.string().optional(),
        stripeId: z.string().optional().nullable(),
        billingCycleStart: z.number().int(),
        paymentFailedAt: z.coerce.date().optional().nullable(),
        stripeConnectId: z.string().optional().nullable(),
        payoutMethodId: z.string().optional().nullable(),
        shopifyStoreId: z.string().optional().nullable(),
        invoicePrefix: z.string().optional().nullable(),
        adminRole: z
            .lazy(() => AdminRoleSchema)
            .optional()
            .nullable(),
        organizationSize: z
            .lazy(() => OrganizationSizeSchema)
            .optional()
            .nullable(),
        reason: z.string().optional().nullable(),
        usage: z.number().int().optional(),
        usageLimit: z.number().int().optional(),
        linksUsage: z.number().int().optional(),
        linksLimit: z.number().int().optional(),
        salesUsage: z.number().int().optional(),
        salesLimit: z.number().int().optional(),
        domainsLimit: z.number().int().optional(),
        tagsLimit: z.number().int().optional(),
        usersLimit: z.number().int().optional(),
        aiUsage: z.number().int().optional(),
        aiLimit: z.number().int().optional(),
        transactionCategoriesLimit: z.number().int().optional(),
        bankConnectionsUsage: z.number().int().optional(),
        bankConnectionsLimit: z.number().int().optional(),
        bankAccountsUsage: z.number().int().optional(),
        bankAccountsLimit: z.number().int().optional(),
        documentsUsage: z.number().int().optional(),
        documentsLimit: z.number().int().optional(),
        documentStorageUsage: z.number().int().optional(),
        documentStorageLimit: z.number().int().optional(),
        contractTemplatesUsage: z.number().int().optional(),
        contractTemplatesLimit: z.number().int().optional(),
        activeContractsUsage: z.number().int().optional(),
        activeContractsLimit: z.number().int().optional(),
        invoiceTemplatesUsage: z.number().int().optional(),
        invoiceTemplatesLimit: z.number().int().optional(),
        monthlyInvoicesUsage: z.number().int().optional(),
        monthlyInvoicesLimit: z.number().int().optional(),
        customersUsage: z.number().int().optional(),
        customersLimit: z.number().int().optional(),
        customerTagsUsage: z.number().int().optional(),
        customerTagsLimit: z.number().int().optional(),
        reportsUsage: z.number().int().optional(),
        reportsLimit: z.number().int().optional(),
        reportStorageUsage: z.number().int().optional(),
        reportStorageLimit: z.number().int().optional(),
        apiRequestsUsage: z.number().int().optional(),
        apiRequestsLimit: z.number().int().optional(),
        webhooksUsage: z.number().int().optional(),
        webhooksLimit: z.number().int().optional(),
        integrationsUsage: z.number().int().optional(),
        integrationsLimit: z.number().int().optional(),
        apiTokensUsage: z.number().int().optional(),
        apiTokensLimit: z.number().int().optional(),
        teamMembersUsage: z.number().int().optional(),
        teamMembersLimit: z.number().int().optional(),
        auditLogRetention: z.number().int().optional(),
        referralLinkId: z.string().optional().nullable(),
        referredSignups: z.number().int().optional(),
        webhookEnabled: z.boolean().optional(),
        conversionEnabled: z.boolean().optional(),
        partnersEnabled: z.boolean().optional(),
        ssoEnabled: z.boolean().optional(),
        dotLinkClaimed: z.boolean().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        usageLastChecked: z.coerce.date().optional(),
        users: z.lazy(() => ProjectUsersCreateNestedManyWithoutProjectInputSchema).optional(),
        invites: z.lazy(() => ProjectInviteCreateNestedManyWithoutProjectInputSchema).optional(),
        sentEmails: z.lazy(() => SentEmailCreateNestedManyWithoutProjectInputSchema).optional(),
        links: z.lazy(() => LinkCreateNestedManyWithoutProjectInputSchema).optional(),
        domains: z.lazy(() => DomainCreateNestedManyWithoutProjectInputSchema).optional(),
        tags: z.lazy(() => TagCreateNestedManyWithoutProjectInputSchema).optional(),
        programs: z.lazy(() => ProgramCreateNestedManyWithoutWorkspaceInputSchema).optional(),
        invoices: z.lazy(() => InvoiceCreateNestedManyWithoutWorkspaceInputSchema).optional(),
        customers: z.lazy(() => CustomerCreateNestedManyWithoutProjectInputSchema).optional(),
        defaultDomains: z.lazy(() => DefaultDomainsCreateNestedManyWithoutProjectInputSchema).optional(),
        oAuthCodes: z.lazy(() => OAuthCodeCreateNestedManyWithoutProjectInputSchema).optional(),
        integrations: z.lazy(() => IntegrationCreateNestedManyWithoutProjectInputSchema).optional(),
        installedIntegrations: z.lazy(() => InstalledIntegrationCreateNestedManyWithoutProjectInputSchema).optional(),
        webhooks: z.lazy(() => WebhookCreateNestedManyWithoutProjectInputSchema).optional(),
        registeredDomains: z.lazy(() => RegisteredDomainCreateNestedManyWithoutProjectInputSchema).optional(),
        dashboards: z.lazy(() => DashboardCreateNestedManyWithoutProjectInputSchema).optional(),
        utmTemplates: z.lazy(() => UtmTemplateCreateNestedManyWithoutProjectInputSchema).optional(),
        yearInReviews: z.lazy(() => YearInReviewCreateNestedManyWithoutWorkspaceInputSchema).optional(),
        bankConnections: z.lazy(() => BankConnectionCreateNestedManyWithoutProjectInputSchema).optional(),
        apps: z.lazy(() => AppCreateNestedManyWithoutProjectInputSchema).optional(),
        Inbox: z.lazy(() => InboxCreateNestedManyWithoutProjectInputSchema).optional(),
        BankAccount: z.lazy(() => BankAccountCreateNestedManyWithoutProjectInputSchema).optional(),
        Transaction: z.lazy(() => TransactionCreateNestedManyWithoutProjectInputSchema).optional(),
        TransactionAttachment: z.lazy(() => TransactionAttachmentCreateNestedManyWithoutProjectInputSchema).optional(),
        TransactionCategory: z.lazy(() => TransactionCategoryCreateNestedManyWithoutProjectInputSchema).optional(),
        TransactionEnrichment: z.lazy(() => TransactionEnrichmentCreateNestedManyWithoutProjectInputSchema).optional(),
        Document: z.lazy(() => DocumentCreateNestedManyWithoutProjectInputSchema).optional(),
        CustomerTag: z.lazy(() => CustomerTagCreateNestedManyWithoutProjectInputSchema).optional(),
        ContractTemplate: z.lazy(() => ContractTemplateCreateNestedManyWithoutProjectInputSchema).optional(),
        Report: z.lazy(() => ReportCreateNestedManyWithoutProjectInputSchema).optional(),
        InvoiceTemplate: z.lazy(() => InvoiceTemplateCreateNestedManyWithoutProjectInputSchema).optional()
    })
    .strict()

export default ProjectCreateWithoutRestrictedTokensInputSchema
