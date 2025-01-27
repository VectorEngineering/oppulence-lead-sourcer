import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionReconciliationStatusSchema } from './TransactionReconciliationStatusSchema'
import { NestedEnumTransactionReconciliationStatusFilterSchema } from './NestedEnumTransactionReconciliationStatusFilterSchema'

export const EnumTransactionReconciliationStatusFilterSchema: z.ZodType<Prisma.EnumTransactionReconciliationStatusFilter> = z
    .object({
        equals: z.lazy(() => TransactionReconciliationStatusSchema).optional(),
        in: z
            .lazy(() => TransactionReconciliationStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => TransactionReconciliationStatusSchema)
            .array()
            .optional(),
        not: z
            .union([
                z.lazy(() => TransactionReconciliationStatusSchema),
                z.lazy(() => NestedEnumTransactionReconciliationStatusFilterSchema)
            ])
            .optional()
    })
    .strict()

export default EnumTransactionReconciliationStatusFilterSchema
