import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractArgsSchema } from '../outputTypeSchemas/ContractArgsSchema'
import { DocumentCommentFindManyArgsSchema } from '../outputTypeSchemas/DocumentCommentFindManyArgsSchema'
import { DocumentAnnotationFindManyArgsSchema } from '../outputTypeSchemas/DocumentAnnotationFindManyArgsSchema'
import { ContractDocumentCountOutputTypeArgsSchema } from '../outputTypeSchemas/ContractDocumentCountOutputTypeArgsSchema'

export const ContractDocumentIncludeSchema: z.ZodType<Prisma.ContractDocumentInclude> = z
    .object({
        contract: z.union([z.boolean(), z.lazy(() => ContractArgsSchema)]).optional(),
        documentComments: z.union([z.boolean(), z.lazy(() => DocumentCommentFindManyArgsSchema)]).optional(),
        documentAnnotations: z.union([z.boolean(), z.lazy(() => DocumentAnnotationFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => ContractDocumentCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default ContractDocumentIncludeSchema
