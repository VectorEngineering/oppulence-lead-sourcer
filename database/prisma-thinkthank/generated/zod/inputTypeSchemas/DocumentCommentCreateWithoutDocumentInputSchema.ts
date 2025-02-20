import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const DocumentCommentCreateWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentCommentCreateWithoutDocumentInput> = z
    .object({
        id: z.string().cuid().optional(),
        content: z.string(),
        type: z.string().optional().nullable(),
        status: z.string().optional().nullable(),
        parentCommentId: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdBy: z.string().optional().nullable(),
        updatedBy: z.string().optional().nullable()
    })
    .strict()

export default DocumentCommentCreateWithoutDocumentInputSchema
