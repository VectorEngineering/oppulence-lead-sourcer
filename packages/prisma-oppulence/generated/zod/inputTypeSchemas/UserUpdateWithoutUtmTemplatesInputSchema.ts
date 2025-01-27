import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema'
import { AccountUpdateManyWithoutUserNestedInputSchema } from './AccountUpdateManyWithoutUserNestedInputSchema'
import { SessionUpdateManyWithoutUserNestedInputSchema } from './SessionUpdateManyWithoutUserNestedInputSchema'
import { ProjectUsersUpdateManyWithoutUserNestedInputSchema } from './ProjectUsersUpdateManyWithoutUserNestedInputSchema'
import { PartnerUserUpdateManyWithoutUserNestedInputSchema } from './PartnerUserUpdateManyWithoutUserNestedInputSchema'
import { LinkUpdateManyWithoutUserNestedInputSchema } from './LinkUpdateManyWithoutUserNestedInputSchema'
import { DashboardUpdateManyWithoutUserNestedInputSchema } from './DashboardUpdateManyWithoutUserNestedInputSchema'
import { TokenUpdateManyWithoutUserNestedInputSchema } from './TokenUpdateManyWithoutUserNestedInputSchema'
import { RestrictedTokenUpdateManyWithoutUserNestedInputSchema } from './RestrictedTokenUpdateManyWithoutUserNestedInputSchema'
import { OAuthCodeUpdateManyWithoutUserNestedInputSchema } from './OAuthCodeUpdateManyWithoutUserNestedInputSchema'
import { IntegrationUpdateManyWithoutUserNestedInputSchema } from './IntegrationUpdateManyWithoutUserNestedInputSchema'
import { InstalledIntegrationUpdateManyWithoutUserNestedInputSchema } from './InstalledIntegrationUpdateManyWithoutUserNestedInputSchema'
import { AppUpdateManyWithoutUserNestedInputSchema } from './AppUpdateManyWithoutUserNestedInputSchema'
import { DocumentUpdateManyWithoutOwnerNestedInputSchema } from './DocumentUpdateManyWithoutOwnerNestedInputSchema'
import { ReportAccessUpdateManyWithoutUserNestedInputSchema } from './ReportAccessUpdateManyWithoutUserNestedInputSchema'
import { ReportUpdateManyWithoutCreatorNestedInputSchema } from './ReportUpdateManyWithoutCreatorNestedInputSchema'
import { AIAssistantSettingsUpdateOneWithoutUserNestedInputSchema } from './AIAssistantSettingsUpdateOneWithoutUserNestedInputSchema'
import { FinancialSettingsUpdateOneWithoutUserNestedInputSchema } from './FinancialSettingsUpdateOneWithoutUserNestedInputSchema'
import { LeadUpdateManyWithoutAssignedToNestedInputSchema } from './LeadUpdateManyWithoutAssignedToNestedInputSchema'
import { LeadTaskUpdateManyWithoutAssignedToNestedInputSchema } from './LeadTaskUpdateManyWithoutAssignedToNestedInputSchema'
import { DealUpdateManyWithoutAssignedToNestedInputSchema } from './DealUpdateManyWithoutAssignedToNestedInputSchema'
import { DealTaskUpdateManyWithoutAssignedToNestedInputSchema } from './DealTaskUpdateManyWithoutAssignedToNestedInputSchema'

export const UserUpdateWithoutUtmTemplatesInputSchema: z.ZodType<Prisma.UserUpdateWithoutUtmTemplatesInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        name: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        email: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        emailVerified: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        image: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        isMachine: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        passwordHash: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        invalidLoginAttempts: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        lockedAt: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        subscribed: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        source: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        defaultWorkspace: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        defaultPartnerId: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        referralLinkId: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        fullName: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        dateFormat: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        locale: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        timeFormat: z
            .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        timezone: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        weekStartsOnMonday: z
            .union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
        sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
        projects: z.lazy(() => ProjectUsersUpdateManyWithoutUserNestedInputSchema).optional(),
        partners: z.lazy(() => PartnerUserUpdateManyWithoutUserNestedInputSchema).optional(),
        links: z.lazy(() => LinkUpdateManyWithoutUserNestedInputSchema).optional(),
        dashboards: z.lazy(() => DashboardUpdateManyWithoutUserNestedInputSchema).optional(),
        tokens: z.lazy(() => TokenUpdateManyWithoutUserNestedInputSchema).optional(),
        restrictedTokens: z.lazy(() => RestrictedTokenUpdateManyWithoutUserNestedInputSchema).optional(),
        oAuthCodes: z.lazy(() => OAuthCodeUpdateManyWithoutUserNestedInputSchema).optional(),
        integrations: z.lazy(() => IntegrationUpdateManyWithoutUserNestedInputSchema).optional(),
        installedIntegrations: z.lazy(() => InstalledIntegrationUpdateManyWithoutUserNestedInputSchema).optional(),
        apps: z.lazy(() => AppUpdateManyWithoutUserNestedInputSchema).optional(),
        Document: z.lazy(() => DocumentUpdateManyWithoutOwnerNestedInputSchema).optional(),
        reportAccess: z.lazy(() => ReportAccessUpdateManyWithoutUserNestedInputSchema).optional(),
        reports: z.lazy(() => ReportUpdateManyWithoutCreatorNestedInputSchema).optional(),
        aiAssistantSettings: z.lazy(() => AIAssistantSettingsUpdateOneWithoutUserNestedInputSchema).optional(),
        financialSettings: z.lazy(() => FinancialSettingsUpdateOneWithoutUserNestedInputSchema).optional(),
        Lead: z.lazy(() => LeadUpdateManyWithoutAssignedToNestedInputSchema).optional(),
        LeadTask: z.lazy(() => LeadTaskUpdateManyWithoutAssignedToNestedInputSchema).optional(),
        Deal: z.lazy(() => DealUpdateManyWithoutAssignedToNestedInputSchema).optional(),
        DealTask: z.lazy(() => DealTaskUpdateManyWithoutAssignedToNestedInputSchema).optional()
    })
    .strict()

export default UserUpdateWithoutUtmTemplatesInputSchema
