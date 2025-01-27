import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { EnumAdminRoleNullableWithAggregatesFilterSchema } from './EnumAdminRoleNullableWithAggregatesFilterSchema'
import { AdminRoleSchema } from './AdminRoleSchema'
import { EnumOrganizationSizeNullableWithAggregatesFilterSchema } from './EnumOrganizationSizeNullableWithAggregatesFilterSchema'
import { OrganizationSizeSchema } from './OrganizationSizeSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const ProjectScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => ProjectScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        slug: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        logo: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        inviteCode: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        plan: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        stripeId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        billingCycleStart: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        paymentFailedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        stripeConnectId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        payoutMethodId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        shopifyStoreId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        invoicePrefix: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        adminRole: z
            .union([z.lazy(() => EnumAdminRoleNullableWithAggregatesFilterSchema), z.lazy(() => AdminRoleSchema)])
            .optional()
            .nullable(),
        organizationSize: z
            .union([z.lazy(() => EnumOrganizationSizeNullableWithAggregatesFilterSchema), z.lazy(() => OrganizationSizeSchema)])
            .optional()
            .nullable(),
        reason: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        usage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        usageLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        linksUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        linksLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        salesUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        salesLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        domainsLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        tagsLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        usersLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        aiUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        aiLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        transactionCategoriesLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        bankConnectionsUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        bankConnectionsLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        bankAccountsUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        bankAccountsLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        documentsUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        documentsLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        documentStorageUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        documentStorageLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        contractTemplatesUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        contractTemplatesLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        activeContractsUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        activeContractsLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        invoiceTemplatesUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        invoiceTemplatesLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        monthlyInvoicesUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        monthlyInvoicesLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        customersUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        customersLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        customerTagsUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        customerTagsLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        reportsUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        reportsLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        reportStorageUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        reportStorageLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        apiRequestsUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        apiRequestsLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        webhooksUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        webhooksLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        integrationsUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        integrationsLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        apiTokensUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        apiTokensLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        teamMembersUsage: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        teamMembersLimit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        auditLogRetention: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        referralLinkId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        referredSignups: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        webhookEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        conversionEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        partnersEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        ssoEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        dotLinkClaimed: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        usageLastChecked: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default ProjectScalarWhereWithAggregatesInputSchema
