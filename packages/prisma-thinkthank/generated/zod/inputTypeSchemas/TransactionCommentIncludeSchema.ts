import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionArgsSchema } from '../outputTypeSchemas/TransactionArgsSchema'

export const TransactionCommentIncludeSchema: z.ZodType<Prisma.TransactionCommentInclude> = z
    .object({
        transaction: z.union([z.boolean(), z.lazy(() => TransactionArgsSchema)]).optional()
    })
    .strict()

export default TransactionCommentIncludeSchema
