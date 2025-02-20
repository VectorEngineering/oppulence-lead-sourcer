import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionReconciliationMatchIncludeSchema } from '../inputTypeSchemas/TransactionReconciliationMatchIncludeSchema'
import { TransactionReconciliationMatchCreateInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchCreateInputSchema'
import { TransactionReconciliationMatchUncheckedCreateInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchUncheckedCreateInputSchema'
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

export const TransactionReconciliationMatchCreateArgsSchema: z.ZodType<Prisma.TransactionReconciliationMatchCreateArgs> = z
    .object({
        select: TransactionReconciliationMatchSelectSchema.optional(),
        include: TransactionReconciliationMatchIncludeSchema.optional(),
        data: z.union([TransactionReconciliationMatchCreateInputSchema, TransactionReconciliationMatchUncheckedCreateInputSchema])
    })
    .strict()

export default TransactionReconciliationMatchCreateArgsSchema
