import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionCommentIncludeSchema } from '../inputTypeSchemas/TransactionCommentIncludeSchema'
import { TransactionCommentWhereInputSchema } from '../inputTypeSchemas/TransactionCommentWhereInputSchema'
import { TransactionCommentOrderByWithRelationInputSchema } from '../inputTypeSchemas/TransactionCommentOrderByWithRelationInputSchema'
import { TransactionCommentWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionCommentWhereUniqueInputSchema'
import { TransactionCommentScalarFieldEnumSchema } from '../inputTypeSchemas/TransactionCommentScalarFieldEnumSchema'
import { TransactionArgsSchema } from '../outputTypeSchemas/TransactionArgsSchema'
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

export const TransactionCommentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TransactionCommentFindFirstOrThrowArgs> = z
    .object({
        select: TransactionCommentSelectSchema.optional(),
        include: TransactionCommentIncludeSchema.optional(),
        where: TransactionCommentWhereInputSchema.optional(),
        orderBy: z
            .union([TransactionCommentOrderByWithRelationInputSchema.array(), TransactionCommentOrderByWithRelationInputSchema])
            .optional(),
        cursor: TransactionCommentWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([TransactionCommentScalarFieldEnumSchema, TransactionCommentScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default TransactionCommentFindFirstOrThrowArgsSchema
