import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DocumentAnnotationIncludeSchema } from '../inputTypeSchemas/DocumentAnnotationIncludeSchema'
import { DocumentAnnotationWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentAnnotationWhereUniqueInputSchema'
import { ContractDocumentArgsSchema } from './ContractDocumentArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const DocumentAnnotationFindUniqueArgsSchema: z.ZodType<Prisma.DocumentAnnotationFindUniqueArgs> = z
    .object({
        select: DocumentAnnotationSelectSchema.optional(),
        include: DocumentAnnotationIncludeSchema.optional(),
        where: DocumentAnnotationWhereUniqueInputSchema
    })
    .strict()

export default DocumentAnnotationFindUniqueArgsSchema
