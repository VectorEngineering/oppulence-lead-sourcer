import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionReconciliationMatchSelectSchema } from '../inputTypeSchemas/TransactionReconciliationMatchSelectSchema'
import { TransactionReconciliationMatchIncludeSchema } from '../inputTypeSchemas/TransactionReconciliationMatchIncludeSchema'

export const TransactionReconciliationMatchArgsSchema: z.ZodType<Prisma.TransactionReconciliationMatchDefaultArgs> = z
    .object({
        select: z.lazy(() => TransactionReconciliationMatchSelectSchema).optional(),
        include: z.lazy(() => TransactionReconciliationMatchIncludeSchema).optional()
    })
    .strict()

export default TransactionReconciliationMatchArgsSchema
