import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionVerificationStatusSchema } from './TransactionVerificationStatusSchema'
import { NestedEnumTransactionVerificationStatusFilterSchema } from './NestedEnumTransactionVerificationStatusFilterSchema'

export const EnumTransactionVerificationStatusFilterSchema: z.ZodType<Prisma.EnumTransactionVerificationStatusFilter> = z
    .object({
        equals: z.lazy(() => TransactionVerificationStatusSchema).optional(),
        in: z
            .lazy(() => TransactionVerificationStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => TransactionVerificationStatusSchema)
            .array()
            .optional(),
        not: z
            .union([z.lazy(() => TransactionVerificationStatusSchema), z.lazy(() => NestedEnumTransactionVerificationStatusFilterSchema)])
            .optional()
    })
    .strict()

export default EnumTransactionVerificationStatusFilterSchema
