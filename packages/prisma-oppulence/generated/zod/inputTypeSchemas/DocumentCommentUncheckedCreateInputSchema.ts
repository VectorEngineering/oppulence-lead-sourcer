import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const DocumentCommentUncheckedCreateInputSchema: z.ZodType<Prisma.DocumentCommentUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        documentId: z.string(),
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

export default DocumentCommentUncheckedCreateInputSchema
