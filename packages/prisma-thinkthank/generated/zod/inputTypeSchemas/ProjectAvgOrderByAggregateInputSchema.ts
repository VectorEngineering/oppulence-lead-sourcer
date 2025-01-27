import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ProjectAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectAvgOrderByAggregateInput> = z
    .object({
        billingCycleStart: z.lazy(() => SortOrderSchema).optional(),
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
        referredSignups: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ProjectAvgOrderByAggregateInputSchema
