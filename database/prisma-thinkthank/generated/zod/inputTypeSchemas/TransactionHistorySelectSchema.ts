import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionArgsSchema } from '../outputTypeSchemas/TransactionArgsSchema'

export const TransactionHistorySelectSchema: z.ZodType<Prisma.TransactionHistorySelect> = z
    .object({
        id: z.boolean().optional(),
        transactionId: z.boolean().optional(),
        action: z.boolean().optional(),
        description: z.boolean().optional(),
        changes: z.boolean().optional(),
        metadata: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        transaction: z.union([z.boolean(), z.lazy(() => TransactionArgsSchema)]).optional()
    })
    .strict()

export default TransactionHistorySelectSchema
