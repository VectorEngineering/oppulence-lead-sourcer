import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionCommentIncludeSchema } from '../inputTypeSchemas/TransactionCommentIncludeSchema'
import { TransactionCommentWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionCommentWhereUniqueInputSchema'
import { TransactionArgsSchema } from './TransactionArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const TransactionCommentDeleteArgsSchema: z.ZodType<Prisma.TransactionCommentDeleteArgs> = z
    .object({
        select: TransactionCommentSelectSchema.optional(),
        include: TransactionCommentIncludeSchema.optional(),
        where: TransactionCommentWhereUniqueInputSchema
    })
    .strict()

export default TransactionCommentDeleteArgsSchema
