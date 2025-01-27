import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DocumentCommentUpdateManyMutationInputSchema } from '../inputTypeSchemas/DocumentCommentUpdateManyMutationInputSchema'
import { DocumentCommentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DocumentCommentUncheckedUpdateManyInputSchema'
import { DocumentCommentWhereInputSchema } from '../inputTypeSchemas/DocumentCommentWhereInputSchema'

export const DocumentCommentUpdateManyArgsSchema: z.ZodType<Prisma.DocumentCommentUpdateManyArgs> = z
    .object({
        data: z.union([DocumentCommentUpdateManyMutationInputSchema, DocumentCommentUncheckedUpdateManyInputSchema]),
        where: DocumentCommentWhereInputSchema.optional()
    })
    .strict()

export default DocumentCommentUpdateManyArgsSchema
