import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionRiskLevelSchema } from './TransactionRiskLevelSchema'
import { NestedEnumTransactionRiskLevelFilterSchema } from './NestedEnumTransactionRiskLevelFilterSchema'

export const EnumTransactionRiskLevelFilterSchema: z.ZodType<Prisma.EnumTransactionRiskLevelFilter> = z
    .object({
        equals: z.lazy(() => TransactionRiskLevelSchema).optional(),
        in: z
            .lazy(() => TransactionRiskLevelSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => TransactionRiskLevelSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => TransactionRiskLevelSchema), z.lazy(() => NestedEnumTransactionRiskLevelFilterSchema)]).optional()
    })
    .strict()

export default EnumTransactionRiskLevelFilterSchema
