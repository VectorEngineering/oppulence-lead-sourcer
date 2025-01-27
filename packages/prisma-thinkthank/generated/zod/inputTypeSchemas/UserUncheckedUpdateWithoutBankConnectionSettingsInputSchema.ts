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
import { AccountUncheckedUpdateManyWithoutUserNestedInputSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInputSchema'
import { SessionUncheckedUpdateManyWithoutUserNestedInputSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInputSchema'
import { ProjectUsersUncheckedUpdateManyWithoutUserNestedInputSchema } from './ProjectUsersUncheckedUpdateManyWithoutUserNestedInputSchema'
import { PartnerUserUncheckedUpdateManyWithoutUserNestedInputSchema } from './PartnerUserUncheckedUpdateManyWithoutUserNestedInputSchema'
import { LinkUncheckedUpdateManyWithoutUserNestedInputSchema } from './LinkUncheckedUpdateManyWithoutUserNestedInputSchema'
import { DashboardUncheckedUpdateManyWithoutUserNestedInputSchema } from './DashboardUncheckedUpdateManyWithoutUserNestedInputSchema'
import { TokenUncheckedUpdateManyWithoutUserNestedInputSchema } from './TokenUncheckedUpdateManyWithoutUserNestedInputSchema'
import { RestrictedTokenUncheckedUpdateManyWithoutUserNestedInputSchema } from './RestrictedTokenUncheckedUpdateManyWithoutUserNestedInputSchema'
import { OAuthCodeUncheckedUpdateManyWithoutUserNestedInputSchema } from './OAuthCodeUncheckedUpdateManyWithoutUserNestedInputSchema'
import { IntegrationUncheckedUpdateManyWithoutUserNestedInputSchema } from './IntegrationUncheckedUpdateManyWithoutUserNestedInputSchema'
import { InstalledIntegrationUncheckedUpdateManyWithoutUserNestedInputSchema } from './InstalledIntegrationUncheckedUpdateManyWithoutUserNestedInputSchema'
import { UtmTemplateUncheckedUpdateManyWithoutUserNestedInputSchema } from './UtmTemplateUncheckedUpdateManyWithoutUserNestedInputSchema'
import { AppUncheckedUpdateManyWithoutUserNestedInputSchema } from './AppUncheckedUpdateManyWithoutUserNestedInputSchema'
import { BankAccountUncheckedUpdateManyWithoutCreatorNestedInputSchema } from './BankAccountUncheckedUpdateManyWithoutCreatorNestedInputSchema'
import { TransactionUncheckedUpdateManyWithoutAssignedToNestedInputSchema } from './TransactionUncheckedUpdateManyWithoutAssignedToNestedInputSchema'
import { DocumentUncheckedUpdateManyWithoutOwnerNestedInputSchema } from './DocumentUncheckedUpdateManyWithoutOwnerNestedInputSchema'
import { ReportAccessUncheckedUpdateManyWithoutUserNestedInputSchema } from './ReportAccessUncheckedUpdateManyWithoutUserNestedInputSchema'
import { ReportUncheckedUpdateManyWithoutCreatorNestedInputSchema } from './ReportUncheckedUpdateManyWithoutCreatorNestedInputSchema'
import { AIAssistantSettingsUncheckedUpdateOneWithoutUserNestedInputSchema } from './AIAssistantSettingsUncheckedUpdateOneWithoutUserNestedInputSchema'
import { FinancialSettingsUncheckedUpdateOneWithoutUserNestedInputSchema } from './FinancialSettingsUncheckedUpdateOneWithoutUserNestedInputSchema'

export const UserUncheckedUpdateWithoutBankConnectionSettingsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutBankConnectionSettingsInput> =
    z
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
            accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
            sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
            projects: z.lazy(() => ProjectUsersUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
            partners: z.lazy(() => PartnerUserUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
            links: z.lazy(() => LinkUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
            dashboards: z.lazy(() => DashboardUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
            tokens: z.lazy(() => TokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
            restrictedTokens: z.lazy(() => RestrictedTokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
            oAuthCodes: z.lazy(() => OAuthCodeUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
            integrations: z.lazy(() => IntegrationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
            installedIntegrations: z.lazy(() => InstalledIntegrationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
            utmTemplates: z.lazy(() => UtmTemplateUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
            apps: z.lazy(() => AppUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
            bankAccounts: z.lazy(() => BankAccountUncheckedUpdateManyWithoutCreatorNestedInputSchema).optional(),
            Transaction: z.lazy(() => TransactionUncheckedUpdateManyWithoutAssignedToNestedInputSchema).optional(),
            Document: z.lazy(() => DocumentUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
            reportAccess: z.lazy(() => ReportAccessUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
            reports: z.lazy(() => ReportUncheckedUpdateManyWithoutCreatorNestedInputSchema).optional(),
            aiAssistantSettings: z.lazy(() => AIAssistantSettingsUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
            financialSettings: z.lazy(() => FinancialSettingsUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
        })
        .strict()

export default UserUncheckedUpdateWithoutBankConnectionSettingsInputSchema
