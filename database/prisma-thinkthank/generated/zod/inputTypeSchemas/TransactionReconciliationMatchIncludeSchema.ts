import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionArgsSchema } from '../outputTypeSchemas/TransactionArgsSchema'

export const TransactionReconciliationMatchIncludeSchema: z.ZodType<Prisma.TransactionReconciliationMatchInclude> = z
    .object({
        transaction: z.union([z.boolean(), z.lazy(() => TransactionArgsSchema)]).optional()
    })
    .strict()

export default TransactionReconciliationMatchIncludeSchema
