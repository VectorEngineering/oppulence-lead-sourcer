import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionReconciliationMatchWhereInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchWhereInputSchema'

export const TransactionReconciliationMatchDeleteManyArgsSchema: z.ZodType<Prisma.TransactionReconciliationMatchDeleteManyArgs> = z
    .object({
        where: TransactionReconciliationMatchWhereInputSchema.optional()
    })
    .strict()

export default TransactionReconciliationMatchDeleteManyArgsSchema
