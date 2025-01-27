import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionPrioritySchema } from './TransactionPrioritySchema'

export const EnumTransactionPriorityFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTransactionPriorityFieldUpdateOperationsInput> =
    z
        .object({
            set: z.lazy(() => TransactionPrioritySchema).optional()
        })
        .strict()

export default EnumTransactionPriorityFieldUpdateOperationsInputSchema
