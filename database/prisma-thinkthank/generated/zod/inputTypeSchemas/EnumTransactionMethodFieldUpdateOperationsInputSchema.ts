import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionMethodSchema } from './TransactionMethodSchema'

export const EnumTransactionMethodFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTransactionMethodFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => TransactionMethodSchema).optional()
    })
    .strict()

export default EnumTransactionMethodFieldUpdateOperationsInputSchema
