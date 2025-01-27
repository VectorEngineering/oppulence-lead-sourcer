import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionCategoryCountOutputTypeSelectSchema } from './TransactionCategoryCountOutputTypeSelectSchema'

export const TransactionCategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.TransactionCategoryCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => TransactionCategoryCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default TransactionCategoryCountOutputTypeSelectSchema
