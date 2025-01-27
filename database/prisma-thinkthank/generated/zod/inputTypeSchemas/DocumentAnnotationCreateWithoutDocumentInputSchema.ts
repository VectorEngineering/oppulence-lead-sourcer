import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const DocumentAnnotationCreateWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentAnnotationCreateWithoutDocumentInput> = z
    .object({
        id: z.string().cuid().optional(),
        type: z.string(),
        content: z.string(),
        pageNumber: z.number().int().optional().nullable(),
        coordinates: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        color: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdBy: z.string().optional().nullable()
    })
    .strict()

export default DocumentAnnotationCreateWithoutDocumentInputSchema
