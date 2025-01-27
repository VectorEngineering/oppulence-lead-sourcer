import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractDocumentArgsSchema } from '../outputTypeSchemas/ContractDocumentArgsSchema'

export const DocumentCommentSelectSchema: z.ZodType<Prisma.DocumentCommentSelect> = z
    .object({
        id: z.boolean().optional(),
        documentId: z.boolean().optional(),
        content: z.boolean().optional(),
        type: z.boolean().optional(),
        status: z.boolean().optional(),
        parentCommentId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        updatedBy: z.boolean().optional(),
        document: z.union([z.boolean(), z.lazy(() => ContractDocumentArgsSchema)]).optional()
    })
    .strict()

export default DocumentCommentSelectSchema
