import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { TransactionCreateNestedOneWithoutAttachmentsInputSchema } from './TransactionCreateNestedOneWithoutAttachmentsInputSchema'
import { InboxCreateNestedManyWithoutAttachmentInputSchema } from './InboxCreateNestedManyWithoutAttachmentInputSchema'

export const TransactionAttachmentCreateWithoutProjectInputSchema: z.ZodType<Prisma.TransactionAttachmentCreateWithoutProjectInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string().optional().nullable(),
        description: z.string().optional().nullable(),
        type: z.string().optional().nullable(),
        category: z.string().optional().nullable(),
        path: z.string(),
        size: z.number().int().optional().nullable(),
        mimeType: z.string().optional().nullable(),
        hash: z.string().optional().nullable(),
        metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        isConfidential: z.boolean().optional(),
        status: z.string().optional().nullable(),
        processingErrors: z.string().optional().nullable(),
        ocrText: z.string().optional().nullable(),
        analysisResults: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        blob: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        transaction: z.lazy(() => TransactionCreateNestedOneWithoutAttachmentsInputSchema),
        inbox: z.lazy(() => InboxCreateNestedManyWithoutAttachmentInputSchema).optional()
    })
    .strict()

export default TransactionAttachmentCreateWithoutProjectInputSchema
