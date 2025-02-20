import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionCategoryWhereInputSchema } from '../inputTypeSchemas/TransactionCategoryWhereInputSchema'

export const TransactionCategoryDeleteManyArgsSchema: z.ZodType<Prisma.TransactionCategoryDeleteManyArgs> = z
    .object({
        where: TransactionCategoryWhereInputSchema.optional()
    })
    .strict()

export default TransactionCategoryDeleteManyArgsSchema
