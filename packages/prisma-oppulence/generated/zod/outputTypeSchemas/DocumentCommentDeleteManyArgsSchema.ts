import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DocumentCommentWhereInputSchema } from '../inputTypeSchemas/DocumentCommentWhereInputSchema'

export const DocumentCommentDeleteManyArgsSchema: z.ZodType<Prisma.DocumentCommentDeleteManyArgs> = z
    .object({
        where: DocumentCommentWhereInputSchema.optional()
    })
    .strict()

export default DocumentCommentDeleteManyArgsSchema
