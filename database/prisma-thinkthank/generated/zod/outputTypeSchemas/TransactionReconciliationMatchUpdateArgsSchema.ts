import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionReconciliationMatchIncludeSchema } from '../inputTypeSchemas/TransactionReconciliationMatchIncludeSchema'
import { TransactionReconciliationMatchUpdateInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchUpdateInputSchema'
import { TransactionReconciliationMatchUncheckedUpdateInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchUncheckedUpdateInputSchema'
import { TransactionReconciliationMatchWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchWhereUniqueInputSchema'
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

export const TransactionReconciliationMatchUpdateArgsSchema: z.ZodType<Prisma.TransactionReconciliationMatchUpdateArgs> = z
    .object({
        select: TransactionReconciliationMatchSelectSchema.optional(),
        include: TransactionReconciliationMatchIncludeSchema.optional(),
        data: z.union([TransactionReconciliationMatchUpdateInputSchema, TransactionReconciliationMatchUncheckedUpdateInputSchema]),
        where: TransactionReconciliationMatchWhereUniqueInputSchema
    })
    .strict()

export default TransactionReconciliationMatchUpdateArgsSchema
