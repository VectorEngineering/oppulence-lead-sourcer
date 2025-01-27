import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { AdminRoleSchema } from './AdminRoleSchema'
import { NullableEnumAdminRoleFieldUpdateOperationsInputSchema } from './NullableEnumAdminRoleFieldUpdateOperationsInputSchema'
import { OrganizationSizeSchema } from './OrganizationSizeSchema'
import { NullableEnumOrganizationSizeFieldUpdateOperationsInputSchema } from './NullableEnumOrganizationSizeFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { ProjectUsersUpdateManyWithoutProjectNestedInputSchema } from './ProjectUsersUpdateManyWithoutProjectNestedInputSchema'
import { ProjectInviteUpdateManyWithoutProjectNestedInputSchema } from './ProjectInviteUpdateManyWithoutProjectNestedInputSchema'
import { SentEmailUpdateManyWithoutProjectNestedInputSchema } from './SentEmailUpdateManyWithoutProjectNestedInputSchema'
import { LinkUpdateManyWithoutProjectNestedInputSchema } from './LinkUpdateManyWithoutProjectNestedInputSchema'
import { DomainUpdateManyWithoutProjectNestedInputSchema } from './DomainUpdateManyWithoutProjectNestedInputSchema'
import { TagUpdateManyWithoutProjectNestedInputSchema } from './TagUpdateManyWithoutProjectNestedInputSchema'
import { ProgramUpdateManyWithoutWorkspaceNestedInputSchema } from './ProgramUpdateManyWithoutWorkspaceNestedInputSchema'
import { InvoiceUpdateManyWithoutWorkspaceNestedInputSchema } from './InvoiceUpdateManyWithoutWorkspaceNestedInputSchema'
import { CustomerUpdateManyWithoutProjectNestedInputSchema } from './CustomerUpdateManyWithoutProjectNestedInputSchema'
import { DefaultDomainsUpdateManyWithoutProjectNestedInputSchema } from './DefaultDomainsUpdateManyWithoutProjectNestedInputSchema'
import { RestrictedTokenUpdateManyWithoutProjectNestedInputSchema } from './RestrictedTokenUpdateManyWithoutProjectNestedInputSchema'
import { OAuthCodeUpdateManyWithoutProjectNestedInputSchema } from './OAuthCodeUpdateManyWithoutProjectNestedInputSchema'
import { IntegrationUpdateManyWithoutProjectNestedInputSchema } from './IntegrationUpdateManyWithoutProjectNestedInputSchema'
import { InstalledIntegrationUpdateManyWithoutProjectNestedInputSchema } from './InstalledIntegrationUpdateManyWithoutProjectNestedInputSchema'
import { WebhookUpdateManyWithoutProjectNestedInputSchema } from './WebhookUpdateManyWithoutProjectNestedInputSchema'
import { RegisteredDomainUpdateManyWithoutProjectNestedInputSchema } from './RegisteredDomainUpdateManyWithoutProjectNestedInputSchema'
import { DashboardUpdateManyWithoutProjectNestedInputSchema } from './DashboardUpdateManyWithoutProjectNestedInputSchema'
import { UtmTemplateUpdateManyWithoutProjectNestedInputSchema } from './UtmTemplateUpdateManyWithoutProjectNestedInputSchema'
import { YearInReviewUpdateManyWithoutWorkspaceNestedInputSchema } from './YearInReviewUpdateManyWithoutWorkspaceNestedInputSchema'
import { InboxUpdateManyWithoutProjectNestedInputSchema } from './InboxUpdateManyWithoutProjectNestedInputSchema'
import { DocumentUpdateManyWithoutProjectNestedInputSchema } from './DocumentUpdateManyWithoutProjectNestedInputSchema'
import { CustomerTagUpdateManyWithoutProjectNestedInputSchema } from './CustomerTagUpdateManyWithoutProjectNestedInputSchema'
import { ContractTemplateUpdateManyWithoutProjectNestedInputSchema } from './ContractTemplateUpdateManyWithoutProjectNestedInputSchema'
import { ReportUpdateManyWithoutProjectNestedInputSchema } from './ReportUpdateManyWithoutProjectNestedInputSchema'
import { InvoiceTemplateUpdateManyWithoutProjectNestedInputSchema } from './InvoiceTemplateUpdateManyWithoutProjectNestedInputSchema'
import { LeadUpdateManyWithoutProjectNestedInputSchema } from './LeadUpdateManyWithoutProjectNestedInputSchema'
import { LeadCategoryUpdateManyWithoutProjectNestedInputSchema } from './LeadCategoryUpdateManyWithoutProjectNestedInputSchema'
import { PipelineUpdateManyWithoutProjectNestedInputSchema } from './PipelineUpdateManyWithoutProjectNestedInputSchema'
import { DealUpdateManyWithoutProjectNestedInputSchema } from './DealUpdateManyWithoutProjectNestedInputSchema'
import { TransactionCategoryUpdateManyWithoutProjectNestedInputSchema } from './TransactionCategoryUpdateManyWithoutProjectNestedInputSchema'

export const ProjectUpdateWithoutAppsInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutAppsInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        logo: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        inviteCode: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        plan: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        stripeId: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        billingCycleStart: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        paymentFailedAt: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        stripeConnectId: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        payoutMethodId: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        shopifyStoreId: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        invoicePrefix: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        adminRole: z
            .union([z.lazy(() => AdminRoleSchema), z.lazy(() => NullableEnumAdminRoleFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        organizationSize: z
            .union([z.lazy(() => OrganizationSizeSchema), z.lazy(() => NullableEnumOrganizationSizeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        reason: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        usage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        usageLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        linksUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        linksLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        salesUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        salesLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        domainsLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        tagsLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        usersLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        aiUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        aiLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        transactionCategoriesLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        bankConnectionsUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        bankConnectionsLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        bankAccountsUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        bankAccountsLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        documentsUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        documentsLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        documentStorageUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        documentStorageLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        contractTemplatesUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        contractTemplatesLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        activeContractsUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        activeContractsLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        invoiceTemplatesUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        invoiceTemplatesLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        monthlyInvoicesUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        monthlyInvoicesLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        customersUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        customersLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        customerTagsUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        customerTagsLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        reportsUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        reportsLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        reportStorageUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        reportStorageLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        apiRequestsUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        apiRequestsLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        webhooksUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        webhooksLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        integrationsUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        integrationsLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        apiTokensUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        apiTokensLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        teamMembersUsage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        teamMembersLimit: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        auditLogRetention: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        referralLinkId: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        referredSignups: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        webhookEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        conversionEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        partnersEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        ssoEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        dotLinkClaimed: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        usageLastChecked: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        users: z.lazy(() => ProjectUsersUpdateManyWithoutProjectNestedInputSchema).optional(),
        invites: z.lazy(() => ProjectInviteUpdateManyWithoutProjectNestedInputSchema).optional(),
        sentEmails: z.lazy(() => SentEmailUpdateManyWithoutProjectNestedInputSchema).optional(),
        links: z.lazy(() => LinkUpdateManyWithoutProjectNestedInputSchema).optional(),
        domains: z.lazy(() => DomainUpdateManyWithoutProjectNestedInputSchema).optional(),
        tags: z.lazy(() => TagUpdateManyWithoutProjectNestedInputSchema).optional(),
        programs: z.lazy(() => ProgramUpdateManyWithoutWorkspaceNestedInputSchema).optional(),
        invoices: z.lazy(() => InvoiceUpdateManyWithoutWorkspaceNestedInputSchema).optional(),
        customers: z.lazy(() => CustomerUpdateManyWithoutProjectNestedInputSchema).optional(),
        defaultDomains: z.lazy(() => DefaultDomainsUpdateManyWithoutProjectNestedInputSchema).optional(),
        restrictedTokens: z.lazy(() => RestrictedTokenUpdateManyWithoutProjectNestedInputSchema).optional(),
        oAuthCodes: z.lazy(() => OAuthCodeUpdateManyWithoutProjectNestedInputSchema).optional(),
        integrations: z.lazy(() => IntegrationUpdateManyWithoutProjectNestedInputSchema).optional(),
        installedIntegrations: z.lazy(() => InstalledIntegrationUpdateManyWithoutProjectNestedInputSchema).optional(),
        webhooks: z.lazy(() => WebhookUpdateManyWithoutProjectNestedInputSchema).optional(),
        registeredDomains: z.lazy(() => RegisteredDomainUpdateManyWithoutProjectNestedInputSchema).optional(),
        dashboards: z.lazy(() => DashboardUpdateManyWithoutProjectNestedInputSchema).optional(),
        utmTemplates: z.lazy(() => UtmTemplateUpdateManyWithoutProjectNestedInputSchema).optional(),
        yearInReviews: z.lazy(() => YearInReviewUpdateManyWithoutWorkspaceNestedInputSchema).optional(),
        Inbox: z.lazy(() => InboxUpdateManyWithoutProjectNestedInputSchema).optional(),
        Document: z.lazy(() => DocumentUpdateManyWithoutProjectNestedInputSchema).optional(),
        CustomerTag: z.lazy(() => CustomerTagUpdateManyWithoutProjectNestedInputSchema).optional(),
        ContractTemplate: z.lazy(() => ContractTemplateUpdateManyWithoutProjectNestedInputSchema).optional(),
        Report: z.lazy(() => ReportUpdateManyWithoutProjectNestedInputSchema).optional(),
        InvoiceTemplate: z.lazy(() => InvoiceTemplateUpdateManyWithoutProjectNestedInputSchema).optional(),
        Lead: z.lazy(() => LeadUpdateManyWithoutProjectNestedInputSchema).optional(),
        LeadCategory: z.lazy(() => LeadCategoryUpdateManyWithoutProjectNestedInputSchema).optional(),
        Pipeline: z.lazy(() => PipelineUpdateManyWithoutProjectNestedInputSchema).optional(),
        Deal: z.lazy(() => DealUpdateManyWithoutProjectNestedInputSchema).optional(),
        TransactionCategory: z.lazy(() => TransactionCategoryUpdateManyWithoutProjectNestedInputSchema).optional()
    })
    .strict()

export default ProjectUpdateWithoutAppsInputSchema
