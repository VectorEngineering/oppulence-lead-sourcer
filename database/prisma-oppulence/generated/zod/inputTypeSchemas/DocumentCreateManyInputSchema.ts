import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const DocumentCreateManyInputSchema: z.ZodType<Prisma.DocumentCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        body: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional().nullable(),
        metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        name: z.string().optional().nullable(),
        objectId: z.string().optional().nullable(),
        ownerId: z.string().optional().nullable(),
        parentId: z.string().optional().nullable(),
        pathTokens: z.string(),
        tag: z.string().optional().nullable(),
        projectId: z.string().optional().nullable(),
        title: z.string().optional().nullable(),
        description: z.string().optional().nullable(),
        type: z.string().optional().nullable(),
        url: z.string(),
        size: z.number().int().optional().nullable(),
        mimeType: z.string().optional().nullable(),
        isConfidential: z.boolean().optional(),
        documentType: z.string().optional().nullable(),
        version: z.string().optional().nullable(),
        status: z.string().optional().nullable(),
        updatedAt: z.coerce.date().optional(),
        expiryDate: z.coerce.date().optional().nullable(),
        shareableLink: z.string().optional().nullable(),
        createdBy: z.string().optional().nullable()
    })
    .strict()

export default DocumentCreateManyInputSchema
