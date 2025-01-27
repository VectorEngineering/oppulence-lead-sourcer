import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const InboxActivityCreateWithoutInboxInputSchema: z.ZodType<Prisma.InboxActivityCreateWithoutInboxInput> = z
    .object({
        id: z.string().cuid().optional(),
        action: z.string(),
        description: z.string(),
        metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        createdAt: z.coerce.date().optional(),
        createdBy: z.string().optional().nullable(),
        ipAddress: z.string().optional().nullable(),
        userAgent: z.string().optional().nullable(),
        sessionId: z.string().optional().nullable(),
        requestId: z.string().optional().nullable(),
        success: z.boolean().optional(),
        errorDetails: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        severity: z.string().optional().nullable(),
        source: z.string().optional().nullable(),
        location: z.string().optional().nullable(),
        deviceInfo: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        riskScore: z.number().optional().nullable()
    })
    .strict()

export default InboxActivityCreateWithoutInboxInputSchema
