import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryTagSchema } from './TransactionCategoryTagSchema'

export const NullableEnumTransactionCategoryTagFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumTransactionCategoryTagFieldUpdateOperationsInput> =
    z
        .object({
            set: z
                .lazy(() => TransactionCategoryTagSchema)
                .optional()
                .nullable()
        })
        .strict()

export default NullableEnumTransactionCategoryTagFieldUpdateOperationsInputSchema
