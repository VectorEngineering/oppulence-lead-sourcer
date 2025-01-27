import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { WebhookReceiverSchema } from './WebhookReceiverSchema'
import { EnumWebhookReceiverFieldUpdateOperationsInputSchema } from './EnumWebhookReceiverFieldUpdateOperationsInputSchema'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'
import { WebhookStatusSchema } from './WebhookStatusSchema'
import { EnumWebhookStatusFieldUpdateOperationsInputSchema } from './EnumWebhookStatusFieldUpdateOperationsInputSchema'
import { ProjectUpdateOneRequiredWithoutWebhooksNestedInputSchema } from './ProjectUpdateOneRequiredWithoutWebhooksNestedInputSchema'
import { InstalledIntegrationUpdateOneWithoutWebhookNestedInputSchema } from './InstalledIntegrationUpdateOneWithoutWebhookNestedInputSchema'
import { WebhookLogUpdateManyWithoutWebhookNestedInputSchema } from './WebhookLogUpdateManyWithoutWebhookNestedInputSchema'
import { BankConnectionSettingsUpdateManyWithoutWebhooksNestedInputSchema } from './BankConnectionSettingsUpdateManyWithoutWebhooksNestedInputSchema'

export const WebhookUpdateWithoutLinksInputSchema: z.ZodType<Prisma.WebhookUpdateWithoutLinksInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        receiver: z
            .union([z.lazy(() => WebhookReceiverSchema), z.lazy(() => EnumWebhookReceiverFieldUpdateOperationsInputSchema)])
            .optional(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        secret: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        triggers: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        consecutiveFailures: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        lastFailedAt: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        disabledAt: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        maxRetries: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        lastErrorMessage: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        timeout: z
            .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => WebhookStatusSchema), z.lazy(() => EnumWebhookStatusFieldUpdateOperationsInputSchema)]).optional(),
        verificationToken: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        ipWhitelist: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        rateLimitPerMinute: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        project: z.lazy(() => ProjectUpdateOneRequiredWithoutWebhooksNestedInputSchema).optional(),
        installedIntegration: z.lazy(() => InstalledIntegrationUpdateOneWithoutWebhookNestedInputSchema).optional(),
        logs: z.lazy(() => WebhookLogUpdateManyWithoutWebhookNestedInputSchema).optional(),
        bankConnectionSettings: z.lazy(() => BankConnectionSettingsUpdateManyWithoutWebhooksNestedInputSchema).optional()
    })
    .strict()

export default WebhookUpdateWithoutLinksInputSchema
