import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionReconciliationMatchIncludeSchema } from '../inputTypeSchemas/TransactionReconciliationMatchIncludeSchema'
import { TransactionReconciliationMatchWhereInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchWhereInputSchema'
import { TransactionReconciliationMatchOrderByWithRelationInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchOrderByWithRelationInputSchema'
import { TransactionReconciliationMatchWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchWhereUniqueInputSchema'
import { TransactionReconciliationMatchScalarFieldEnumSchema } from '../inputTypeSchemas/TransactionReconciliationMatchScalarFieldEnumSchema'
import { TransactionArgsSchema } from '../outputTypeSchemas/TransactionArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TransactionReconciliationMatchSelectSchema: z.ZodType<Prisma.TransactionReconciliationMatchSelect> = z
    .object({
        id: z.boolean().optional(),
        transactionId: z.boolean().optional(),
        matchedTransactionId: z.boolean().optional(),
        confidence: z.boolean().optional(),
        matchType: z.boolean().optional(),
        status: z.boolean().optional(),
        notes: z.boolean().optional(),
        metadata: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        transaction: z.union([z.boolean(), z.lazy(() => TransactionArgsSchema)]).optional()
    })
    .strict()

export const TransactionReconciliationMatchFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TransactionReconciliationMatchFindFirstOrThrowArgs> =
    z
        .object({
            select: TransactionReconciliationMatchSelectSchema.optional(),
            include: TransactionReconciliationMatchIncludeSchema.optional(),
            where: TransactionReconciliationMatchWhereInputSchema.optional(),
            orderBy: z
                .union([
                    TransactionReconciliationMatchOrderByWithRelationInputSchema.array(),
                    TransactionReconciliationMatchOrderByWithRelationInputSchema
                ])
                .optional(),
            cursor: TransactionReconciliationMatchWhereUniqueInputSchema.optional(),
            take: z.number().optional(),
            skip: z.number().optional(),
            distinct: z
                .union([TransactionReconciliationMatchScalarFieldEnumSchema, TransactionReconciliationMatchScalarFieldEnumSchema.array()])
                .optional()
        })
        .strict()

export default TransactionReconciliationMatchFindFirstOrThrowArgsSchema
