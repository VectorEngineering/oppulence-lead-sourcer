import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'
import { SyncFrequencySchema } from './SyncFrequencySchema'
import { EnumSyncFrequencyFieldUpdateOperationsInputSchema } from './EnumSyncFrequencyFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { ConnectionStatusSchema } from './ConnectionStatusSchema'
import { EnumConnectionStatusFieldUpdateOperationsInputSchema } from './EnumConnectionStatusFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { BankConnectionUpdateOneRequiredWithoutSettingsNestedInputSchema } from './BankConnectionUpdateOneRequiredWithoutSettingsNestedInputSchema'
import { UserUpdateOneRequiredWithoutBankConnectionSettingsNestedInputSchema } from './UserUpdateOneRequiredWithoutBankConnectionSettingsNestedInputSchema'

export const BankConnectionSettingsUpdateWithoutWebhooksInputSchema: z.ZodType<Prisma.BankConnectionSettingsUpdateWithoutWebhooksInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        syncEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        syncStartTime: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        syncDayOfWeek: z
            .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        syncDayOfMonth: z
            .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        syncFrequency: z
            .union([z.lazy(() => SyncFrequencySchema), z.lazy(() => EnumSyncFrequencyFieldUpdateOperationsInputSchema)])
            .optional(),
        connectionTimeout: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        readTimeout: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        maxRequestsPerHour: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        maxConcurrentRequests: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        syncTransactions: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        syncBalances: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        syncStatements: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        syncIdentity: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        syncCategories: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        syncMerchants: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        syncAttachments: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        historicalDays: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        refreshTokenEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        autoReconnectEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        connectionStatus: z
            .union([z.lazy(() => ConnectionStatusSchema), z.lazy(() => EnumConnectionStatusFieldUpdateOperationsInputSchema)])
            .optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        merchantEnrichmentEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        merchantCategorizationEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        merchantLogoEnrichmentEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        merchantNameCleaningEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        bankConnection: z.lazy(() => BankConnectionUpdateOneRequiredWithoutSettingsNestedInputSchema).optional(),
        creator: z.lazy(() => UserUpdateOneRequiredWithoutBankConnectionSettingsNestedInputSchema).optional()
    })
    .strict()

export default BankConnectionSettingsUpdateWithoutWebhooksInputSchema
