import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { EnumWebhookReceiverFilterSchema } from './EnumWebhookReceiverFilterSchema'
import { WebhookReceiverSchema } from './WebhookReceiverSchema'
import { JsonFilterSchema } from './JsonFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { EnumWebhookStatusFilterSchema } from './EnumWebhookStatusFilterSchema'
import { WebhookStatusSchema } from './WebhookStatusSchema'

export const WebhookScalarWhereInputSchema: z.ZodType<Prisma.WebhookScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => WebhookScalarWhereInputSchema), z.lazy(() => WebhookScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => WebhookScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => WebhookScalarWhereInputSchema), z.lazy(() => WebhookScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        installationId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        receiver: z.union([z.lazy(() => EnumWebhookReceiverFilterSchema), z.lazy(() => WebhookReceiverSchema)]).optional(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        secret: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        triggers: z.lazy(() => JsonFilterSchema).optional(),
        consecutiveFailures: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        lastFailedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        disabledAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        maxRetries: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        lastErrorMessage: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        timeout: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => EnumWebhookStatusFilterSchema), z.lazy(() => WebhookStatusSchema)]).optional(),
        verificationToken: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        ipWhitelist: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        rateLimitPerMinute: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional()
    })
    .strict()

export default WebhookScalarWhereInputSchema
