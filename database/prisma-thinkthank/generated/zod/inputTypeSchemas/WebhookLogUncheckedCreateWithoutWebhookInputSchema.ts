import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const WebhookLogUncheckedCreateWithoutWebhookInputSchema: z.ZodType<Prisma.WebhookLogUncheckedCreateWithoutWebhookInput> = z
    .object({
        id: z.string().cuid().optional(),
        requestBody: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        responseBody: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        statusCode: z.number().int().optional().nullable(),
        duration: z.number().int(),
        success: z.boolean(),
        errorMessage: z.string().optional().nullable(),
        timestamp: z.coerce.date().optional()
    })
    .strict()

export default WebhookLogUncheckedCreateWithoutWebhookInputSchema
