import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionReconciliationStatusSchema } from './TransactionReconciliationStatusSchema'

export const EnumTransactionReconciliationStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTransactionReconciliationStatusFieldUpdateOperationsInput> =
    z
        .object({
            set: z.lazy(() => TransactionReconciliationStatusSchema).optional()
        })
        .strict()

export default EnumTransactionReconciliationStatusFieldUpdateOperationsInputSchema
