import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionHistoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/TransactionHistoryUpdateManyMutationInputSchema'
import { TransactionHistoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TransactionHistoryUncheckedUpdateManyInputSchema'
import { TransactionHistoryWhereInputSchema } from '../inputTypeSchemas/TransactionHistoryWhereInputSchema'

export const TransactionHistoryUpdateManyArgsSchema: z.ZodType<Prisma.TransactionHistoryUpdateManyArgs> = z
    .object({
        data: z.union([TransactionHistoryUpdateManyMutationInputSchema, TransactionHistoryUncheckedUpdateManyInputSchema]),
        where: TransactionHistoryWhereInputSchema.optional()
    })
    .strict()

export default TransactionHistoryUpdateManyArgsSchema
