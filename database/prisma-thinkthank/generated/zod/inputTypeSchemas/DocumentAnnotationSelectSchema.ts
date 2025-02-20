import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractDocumentArgsSchema } from '../outputTypeSchemas/ContractDocumentArgsSchema'

export const DocumentAnnotationSelectSchema: z.ZodType<Prisma.DocumentAnnotationSelect> = z
    .object({
        id: z.boolean().optional(),
        documentId: z.boolean().optional(),
        type: z.boolean().optional(),
        content: z.boolean().optional(),
        pageNumber: z.boolean().optional(),
        coordinates: z.boolean().optional(),
        color: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        document: z.union([z.boolean(), z.lazy(() => ContractDocumentArgsSchema)]).optional()
    })
    .strict()

export default DocumentAnnotationSelectSchema
