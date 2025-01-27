import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const TransactionReconciliationMatchScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchScalarWhereWithAggregatesInput> =
    z
        .object({
            AND: z
                .union([
                    z.lazy(() => TransactionReconciliationMatchScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => TransactionReconciliationMatchScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            OR: z
                .lazy(() => TransactionReconciliationMatchScalarWhereWithAggregatesInputSchema)
                .array()
                .optional(),
            NOT: z
                .union([
                    z.lazy(() => TransactionReconciliationMatchScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => TransactionReconciliationMatchScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            transactionId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            matchedTransactionId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            confidence: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
            matchType: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            status: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            notes: z
                .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
                .optional()
                .nullable(),
            metadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
            createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
            updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
        })
        .strict()

export default TransactionReconciliationMatchScalarWhereWithAggregatesInputSchema
