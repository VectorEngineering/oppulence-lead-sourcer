import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { WebhookCreateNestedOneWithoutLogsInputSchema } from './WebhookCreateNestedOneWithoutLogsInputSchema'

export const WebhookLogCreateInputSchema: z.ZodType<Prisma.WebhookLogCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        requestBody: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        responseBody: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        statusCode: z.number().int().optional().nullable(),
        duration: z.number().int(),
        success: z.boolean(),
        errorMessage: z.string().optional().nullable(),
        timestamp: z.coerce.date().optional(),
        webhook: z.lazy(() => WebhookCreateNestedOneWithoutLogsInputSchema)
    })
    .strict()

export default WebhookLogCreateInputSchema
