import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionArgsSchema } from '../outputTypeSchemas/TransactionArgsSchema'

export const TransactionCommentSelectSchema: z.ZodType<Prisma.TransactionCommentSelect> = z
    .object({
        id: z.boolean().optional(),
        transactionId: z.boolean().optional(),
        content: z.boolean().optional(),
        type: z.boolean().optional(),
        visibility: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        transaction: z.union([z.boolean(), z.lazy(() => TransactionArgsSchema)]).optional()
    })
    .strict()

export default TransactionCommentSelectSchema
