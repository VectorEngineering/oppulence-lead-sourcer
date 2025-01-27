import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DocumentCommentSelectSchema } from '../inputTypeSchemas/DocumentCommentSelectSchema'
import { DocumentCommentIncludeSchema } from '../inputTypeSchemas/DocumentCommentIncludeSchema'

export const DocumentCommentArgsSchema: z.ZodType<Prisma.DocumentCommentDefaultArgs> = z
    .object({
        select: z.lazy(() => DocumentCommentSelectSchema).optional(),
        include: z.lazy(() => DocumentCommentIncludeSchema).optional()
    })
    .strict()

export default DocumentCommentArgsSchema
